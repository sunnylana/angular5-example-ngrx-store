import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'forecast',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'forecast',
        loadChildren: './forecastModule/forecast.module#ForecastModule'
      },
      {
        path: 'main',
        loadChildren: './mainModule/main.module#MainModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
