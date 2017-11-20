import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as langActions from './store/language.actions';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './store/app-store.interface';

export class Language {
  static readonly English: LanguageType = 'en';
  static readonly French: LanguageType = 'fr';
  static readonly Spanish: LanguageType = 'es';
}
export type LanguageType = 'en' | 'fr' | 'es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public language = Language;
  public translate: Observable<{lang: string; content: Object} >;
  constructor(private store: Store<AppStore>) {
    this.switchLanguage(Language.English);
  }

  ngOnInit() {
    this.translate = this.store.select('appLanguage');
  }

  switchLanguage(lang: LanguageType) {
    switch (lang) {
      case Language.English : return this.store.dispatch(new langActions.changeLangEN());
      case Language.Spanish : return this.store.dispatch(new langActions.changeLangES());
      case Language.French : return this.store.dispatch(new langActions.changeLangFR());
    }
  }
}
