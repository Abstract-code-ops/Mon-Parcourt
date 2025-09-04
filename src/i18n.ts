import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpBackend from 'i18next-http-backend';

const isServer = typeof window === 'undefined';
const isDevelopment = process.env.NODE_ENV === 'development';

if (!isServer) {
  i18n.use(LanguageDetector);
  }

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  // Init i18next
  // For all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: isDevelopment,
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    interpolation: {escapeValue: false}, // not needed for react as it escapes by default,
    react: {useSuspense: false}, // Disable suspense to prevent hydration issues
  ns: ['common', 'home', 'visa', 'countries', 'about', 'contact', 'coaching', 'blog', 'events'],
    defaultNS: 'common',
    backend: {
      backends: isServer
        ? [HttpBackend]
        : [LocalStorageBackend, HttpBackend],

      backendOptions: isServer
        ? [{
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
          }]
        : [
            // LocalStorageBackend options
        {
          prefix: 'i18next_res_',            // localStorage key prefix
          expirationTime: 2 * 24 * 60 * 60 * 1000, // days
          versions: { en: 'v2', fr: 'v2' },  // bump to invalidate
        },
        // HTTP backend options (loader)
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
          // requestOptions: { cache: 'default' }
        }
      ]
    },
    // Preload languages/namespaces commonly used to avoid transient missingKey logs
    preload: isServer ? ['en', 'fr'] : [],

    detection: {
      // Order and from where user language should be detected
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      // Cache user language on
      caches: ['cookie', 'localStorage'],
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
    },

    // Load namespaces synchronously to reduce loading flicker
    // load: 'languageOnly',
    // cleanCode: true,
  });

export default i18n;