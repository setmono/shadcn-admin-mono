import { useTranslation } from "react-i18next";

import enUS from "@mono/lib/locales/en-US.json";

type DotPrefix<T extends string, P extends string> = P extends ""
  ? T
  : `${P}.${T}`;

type TranslationKeys<T, P extends string = ""> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? DotPrefix<K, P> | TranslationKeys<T[K], DotPrefix<K, P>>
          : DotPrefix<K, P>
        : never;
    }[keyof T]
  : never;

export type AllTranslationKeys = TranslationKeys<typeof enUS>;

export function useT<Prefix extends string = "">(prefix?: Prefix) {
  const { t } = useTranslation();

  return <K extends AllTranslationKeys>(
    key: Prefix extends ""
      ? K
      : K extends `${Prefix}.${infer SubKey}`
        ? SubKey
        : never
  ) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    return t(fullKey as K);
  };
}
