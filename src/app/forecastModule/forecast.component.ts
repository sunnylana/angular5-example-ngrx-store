import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as forecastActions from './store/forecast.actions';
import {ForecastStore} from './shared/interfaces/forecast.store.interface';
import 'rxjs/add/operator/distinctUntilChanged';

/**
 * ForecastComponent
 */
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
})
export class ForecastComponent implements OnInit {
  public searchForm: FormGroup;
  public forecast;
  public translate;
  public city = '';

  constructor(private formBuilder: FormBuilder,
              private store: Store<ForecastStore>) {
  }

  public ngOnInit() {
    this.translate = this.store.select('appLanguage');
    this.forecast = this.store.select('forecast');
    this.searchForm = this.formBuilder.group({
      forecastCity: ['', Validators.required]
    });
    this.searchForm.controls.forecastCity.valueChanges
      .debounceTime(1000)
      .map(item => item.trim())
      .distinctUntilChanged()
      .filter(item => !!item)
      .subscribe(
        (city: string) => {
          this.city = city.toLocaleLowerCase();
          this.store.dispatch(new forecastActions.getForecast(city));
        }
      );
  }
}
