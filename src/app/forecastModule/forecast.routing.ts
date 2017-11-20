import { Routes, RouterModule } from '@angular/router';

import { ForecastComponent } from './forecast.component';

const routes: Routes = [
  {
    path: '',
    component: ForecastComponent
  }
];

export const routing = RouterModule.forChild(routes);
