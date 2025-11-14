import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import type { LocaleCode } from "@mono/lib/locales/index";

import { getAppearance, setAppearance } from "@/storage/local-storage";

const FALLBACK_LANGUAGE = "en-US";

const enUS = await import("@mono/lib/locales/en-US.json").then(
  (m) => m.default
);
const zhCN = await import("@mono/lib/locales/zh-CN.json").then(
  (m) => m.default
);

const savedLang = getAppearance().locale;

if (!savedLang) {
  setAppearance({ locale: navigator.language as LocaleCode });
}

const resources = {
  "en-US": {
    translation: enUS,
  },
  "zh-CN": {
    translation: zhCN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang!,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
