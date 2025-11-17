import type { LocaleCode } from "@/types/locales";
import type { Font } from "@/components/context/font-provider";
import type { Theme } from "@/components/context/theme-provider";

export const LS_PREFIX = "mono_"; // You can modify it to your own
export const LS_APPEARANCE = `${LS_PREFIX}appearance`;

export type LS_AppearanceKey = typeof LS_APPEARANCE;
export type LSAppearanceValue = {
  theme?: Theme;
  font?: Font;
  locale?: LocaleCode;
};

export function setAppearance(value: LSAppearanceValue) {
  const current = getAppearance();
  const merged = { ...current, ...value };
  localStorage.setItem(LS_APPEARANCE, JSON.stringify(merged));
}

export function getAppearance(): LSAppearanceValue {
  const stored = localStorage.getItem(LS_APPEARANCE);
  return stored ? JSON.parse(stored) : {};
}

export function removeAppearanceField(field: keyof LSAppearanceValue) {
  const current = getAppearance();
  if (field in current) {
    delete current[field];
    localStorage.setItem(LS_APPEARANCE, JSON.stringify(current));
  }
}
