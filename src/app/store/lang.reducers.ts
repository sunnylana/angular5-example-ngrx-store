import {langReducer} from './language.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AppStore} from './app-store.interface';

export const reducers: ActionReducerMap<AppStore> = {
  appLanguage: langReducer
};


