import { Component, OnInit } from '@angular/core';
import { AppStore } from '../store/app-store.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  public translate;
  constructor(private store: Store<AppStore>) {}

  ngOnInit() {
    this.translate = this.store.select('appLanguage');
  }
}
