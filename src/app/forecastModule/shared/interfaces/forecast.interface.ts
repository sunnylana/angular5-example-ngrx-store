/**
 * IForecast Interface
 */
import { ILocation } from './location.interface';

interface ICondition {
  text: string;
  icon: string;
  code: number;
}
export interface IDay {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  uv: number;
  condition: ICondition;
}

interface ICurrent {
  last_updated:	string;
  last_updated_epoch:	number;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: ICondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir:	string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  is_day: number;
}

export interface IForecast {
  forecast: {
    forecastday: Array<IDay>;
  };
  location?: ILocation;
  current?: ICurrent;
}
