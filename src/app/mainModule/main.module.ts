import { NgModule } from '@angular/core';

import { routing } from './main.routing';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
