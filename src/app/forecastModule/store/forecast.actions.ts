import { Action } from '@ngrx/store';
import { IForecast } from '../shared/interfaces/forecast.interface';
export const get_forecast = 'get_forecast';
export const add_forecast = 'add_forecast';
export const update_forecast = 'update_forecast';
export const show_error = 'show_error';

export class getForecast implements Action {
  readonly type = get_forecast;
  constructor(public payload: string) {
  }
}

export class addForecast implements Action {
  readonly type = add_forecast;
  constructor(public payload: {city: string, forecast: IForecast}) {}
}

export class updateForecast implements Action {
  readonly type = update_forecast;
  constructor(public payload: IForecast) {}
}

export class showError implements  Action {
  readonly type = show_error;
  constructor(public payload: boolean) {}
}

export type forecastActions =
  getForecast |
  addForecast |
  updateForecast |
  showError;
