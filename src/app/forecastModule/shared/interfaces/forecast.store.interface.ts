import {IForecastStoreage} from './forecast-storage.interface';
import {AppStore} from '../../../store/app-store.interface';

export interface ForecastStore extends AppStore {
  forecast: {
    [key: string]: IForecastStoreage
  };
  showError: boolean;
}
