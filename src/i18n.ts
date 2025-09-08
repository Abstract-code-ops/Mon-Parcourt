import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

import enAbout from "../public/locales/en/about.json";
import enBlog from "../public/locales/en/blog.json";
import enCoaching from "../public/locales/en/coaching.json";
import enCommon from "../public/locales/en/common.json";
import enContact from "../public/locales/en/contact.json";
import enCountries from "../public/locales/en/countries.json";
import enEvents from "../public/locales/en/events.json";
import enHome from "../public/locales/en/home.json";
import enVisa from "../public/locales/en/visa.json";

import frAbout from "../public/locales/fr/about.json";
import frBlog from "../public/locales/fr/blog.json";
import frCoaching from "../public/locales/fr/coaching.json";
import frCommon from "../public/locales/fr/common.json";
import frContact from "../public/locales/fr/contact.json";
import frCountries from "../public/locales/fr/countries.json";
import frEvents from "../public/locales/fr/events.json";
import frHome from "../public/locales/fr/home.json";
import frVisa from "../public/locales/fr/visa.json";

const isServer = typeof window === 'undefined';
const isDevelopment = process.env.NODE_ENV === 'development';

const resources = {
  en: {
    about: enAbout,
    blog: enBlog,
    coaching: enCoaching,
    common: enCommon,
    contact: enContact,
    countries: enCountries,
    events: enEvents,
    home: enHome,
    visa: enVisa,
  },
  fr: {
    about: frAbout,
    blog: frBlog,
    coaching: frCoaching,
    common: frCommon,
    contact: frContact,
    countries: frCountries,
    events: frEvents,
    home: frHome,
    visa: frVisa,
  },
};

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
        ? [resourcesToBackend(resources)]
        : [LocalStorageBackend, HttpBackend],

      backendOptions: isServer
        ? []
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

    detection: {
      // Order and from where user language should be detected
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      // Cache user language on
      caches: ['cookie', 'localStorage'],
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;