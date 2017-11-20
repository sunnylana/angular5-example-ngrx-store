import { IDay } from './forecast.interface';
import { ILocation } from './location.interface';

/**
 * IForecastStoreage Interface
 */
export interface IForecastStoreage {
  location: ILocation;
  forecast: {
    forecastday: Array<IDay>
  };
  lastUpdate: number;
}

