import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jpn from './ja.json';
import eng from './en.json';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
.use(initReactI18next)
.init({
  fallbackLng: 'ja',
  resources: {
    ja: {
      translations: jpn
    },
    en: {
      translations: eng
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['ja', 'en'];

export default i18n;
