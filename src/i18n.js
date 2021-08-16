import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    debug: true,
    useSuspense:false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: {
        en: {
          translation: {
            Introduction: "Introduction",
            "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
              "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop",
            "Plugins to detect the user language":
              "Plugins to detect the user language",
            "Plugins to load translations": "Plugins to load translations",
            "Optionally cache the translations":
              "Optionally cache the translations",
            Advantages: "Advantages",
            "Flexibility to use other packages": "Flexibility to use other packages"
          }
        },
    }
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });


export default i18n;