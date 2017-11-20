import { Injectable, Inject } from '@angular/core';
import * as Config from './api.config/api.config.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IForecast } from './shared/interfaces/forecast.interface';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
/**
 * ForecastService
 */
@Injectable()
export class ForecastService {
  constructor(private http: HttpClient,
              @Inject(Config.API_CONFIG) private api: Config.ApiConfig) {
  }

  public getForecastApiRequest(city: string): Observable<{city: string, forecast: IForecast}> | Observable<Object> {
    const currentCity = city;
    return this.http.get<IForecast>(`${this.api.url}key=${this.api.key}&q=${city}&days=5`)
      .map((forecast: IForecast ) => {
        return {forecast: forecast, city: currentCity};
      })
      .catch(() => {
        return Observable.of<null>(null);
      })
      ;
  }
}
