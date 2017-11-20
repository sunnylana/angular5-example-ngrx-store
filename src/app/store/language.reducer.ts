import * as langActions from './language.actions';
import { LANG } from '../shared/languages/allLanguages';
import { Language } from '../shared/languages/language.type';

export function setLanguage(lang: string): {lang: string, content: Object} {
  return {
    lang: lang,
    content: LANG[lang]
  };
}

export function langReducer(state, action: langActions.langActions) {
  switch (action.type) {
    case langActions.LANG_EN: {
      return {...state, ...setLanguage(Language.English)};
    }
    case langActions.LANG_ES: {
      return {...state, ...setLanguage(Language.Spanish)};
    }
    case langActions.LANG_FR: {
      return {...state, ...setLanguage(Language.French)};
    }
    default: return state;
  }
}
