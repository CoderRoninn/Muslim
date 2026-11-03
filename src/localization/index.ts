import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tr from './locales/tr.json';

// Sets up translations, uses the phone language and falls back to Turkish
i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: Localization.getLocales()[0]?.languageCode ?? 'tr',
  fallbackLng: 'tr',
  // React already escapes text, so this avoids escaping it twice
  interpolation: { escapeValue: false },
});

export default i18n;
