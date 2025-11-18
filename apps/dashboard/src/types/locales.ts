export type LocaleCode = (typeof localeCodes)[number];

export const LOCALES = [
  { code: "en-US", label: "English(US)", flag: "🇺🇸" },
  { code: "zh-Hans-CN", label: "简体中文", flag: "🇨🇳" },
] as const;

export const localeCodes = LOCALES.map(
  (l) => l.code
) as unknown as (typeof LOCALES)[number]["code"][];
