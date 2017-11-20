import {Actions, Effect} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as forecastActions from './forecast.actions';
import {ForecastService} from '../forecast.service';
import {IForecast} from '../shared/interfaces/forecast.interface';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/withLatestFrom';
import { ForecastStore } from '../shared/interfaces/forecast.store.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ForecastEffects {
  @Effect()
  getForecast = this.actions$
    .ofType(forecastActions.get_forecast)
    .withLatestFrom(this.store$)
    .switchMap(([ action, state ]) => {
      const city = action['payload'];
      if (state && state.forecast) { // use saved values for an hour
        for (const prop in state.forecast) {
          if (prop === city && (Date.now() - state.forecast[city].lastUpdate < 360000)) {
            return Observable.of({city: city, forecast: state.forecast[city]});
          }
        }
      }
      return this.forecastService.getForecastApiRequest(city);
    })
    .mergeMap((result: { city: string, forecast: IForecast}) => {
    if (result) {
      const {city, forecast} = result;
      return [
        {type: forecastActions.show_error, payload: false},
        {type: forecastActions.add_forecast, payload: {city: city, forecast: forecast}}
        ];
    } else {
      return [{type: forecastActions.show_error, payload: true}];
    }
    });

  constructor(private actions$: Actions,
              private forecastService: ForecastService,
              private store$: Store<ForecastStore>) {}
}
