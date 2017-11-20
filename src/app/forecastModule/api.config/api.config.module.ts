import { NgModule, InjectionToken } from '@angular/core';

export let API_CONFIG = new InjectionToken<ApiConfig>('api.config');

export class ApiConfig {
  key: string;
  url: string;
}

// API used from https://api.apixu.com

export const API_DI_CONFIG: ApiConfig = {
  key: 'your_api_key_here',
  url: 'https://api.apixu.com/v1/forecast.json?'
};

@NgModule({
  providers: [{
    provide: API_CONFIG,
    useValue: API_DI_CONFIG
  }]
})
export class ApiConfigModule { }
