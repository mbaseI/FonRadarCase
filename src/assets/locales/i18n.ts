import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "../locales/tr";
import en from "../locales/en";
import ch from "../locales/ch";
import heb from "../locales/heb";

const resources = {
  en,
  tr,
  ch,
  heb,
};

i18n.use(initReactI18next).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources,
  lng: "tr",
  fallbackLng: "tr",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
