import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import type { LocaleCode } from "@/types/locales";
import { getAppearance, setAppearance } from "@/storage/local-storage";

import resources from "./locales";

const FALLBACK_LANGUAGE = "en-US";
let savedLang = getAppearance().locale;

if (!savedLang) {
  const browserLang = navigator.language as LocaleCode;
  setAppearance({ locale: browserLang });
  savedLang = browserLang;
}

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
