import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { routing } from './forecast.routing';
import { ForecastComponent } from './forecast.component';
import { ApiConfigModule } from './api.config/api.config.module';
import { SharedModule } from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {forecastReducer} from './store/forecast.reducer';
import {ForecastService} from './forecast.service';
import {EffectsModule} from '@ngrx/effects';
import {ForecastEffects} from './store/forecast.effect';

/**
 * ForecastModule
 */
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ApiConfigModule,
    SharedModule,
    StoreModule.forFeature('forecast', forecastReducer),
    EffectsModule.forFeature([ForecastEffects]),
    routing
  ],
  declarations: [
    ForecastComponent,
  ],
  providers: [
    ForecastService
  ]
})
export class ForecastModule { }
