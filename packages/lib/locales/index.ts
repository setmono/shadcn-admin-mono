/**
 * 📝 How to Add a LOCALES:
 * 1. Add the locale here
 * 2.
 */
export const LOCALES = [
  { code: "en-US", label: "English(US)", flag: "🇺🇸" },
  { code: "zh-CN", label: "简体中文", flag: "🇨🇳" },
] as const;

export type LocaleData = typeof LOCALES;
export type LocaleCode = LocaleData[number]["code"];

export const LOCALE_CODES = LOCALES.map((l) => l.code) as LocaleCode[];
