import { Action } from '@ngrx/store';

export const LANG_EN = 'en';
export const LANG_ES = 'es';
export const LANG_FR = 'fr';

export class changeLangEN implements Action {
  readonly type = LANG_EN;
}

export class changeLangES implements Action {
  readonly type = LANG_ES;
}

export class changeLangFR implements Action {
  readonly type = LANG_FR;
}

export type langActions =  changeLangEN | changeLangES | changeLangFR;
