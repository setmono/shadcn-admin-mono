import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import type { LocaleCode } from "@/types/locales";
import { getAppearance, setAppearance } from "@/storage/local-storage";

const FALLBACK_LANGUAGE = "en-US";
let savedLang = getAppearance().locale;

if (!savedLang) {
  const browserLang = navigator.language as LocaleCode;
  setAppearance({ locale: browserLang });
  savedLang = browserLang;
}

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLang,
    fallbackLng: FALLBACK_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
