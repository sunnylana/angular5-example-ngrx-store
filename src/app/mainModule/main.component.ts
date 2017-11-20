import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  public translate;
  constructor(private store: Store<AppStore>) {}

  ngOnInit() {
    this.translate = this.store.select('appLanguage');
  }
}
