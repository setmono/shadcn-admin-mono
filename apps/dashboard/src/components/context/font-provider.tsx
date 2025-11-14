import { createContext, useContext, useEffect, useState } from "react";

import { fonts } from "@mono/ui/config/font";

import {
  getAppearance,
  removeAppearanceField,
  setAppearance,
} from "@/storage/local-storage";

export type Font = (typeof fonts)[number];

type FontContextType = {
  font: Font;
  setFont: (font: Font) => void;
  resetFont: () => void;
};

const FontContext = createContext<FontContextType | null>(null);

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, _setFont] = useState<Font>(() => {
    const savedFont = getAppearance().font;
    return fonts.includes(savedFont as Font) ? (savedFont as Font) : fonts[0];
  });

  useEffect(() => {
    const applyFont = (font: string) => {
      const root = document.documentElement;
      root.classList.forEach((cls) => {
        if (cls.startsWith("font-")) root.classList.remove(cls);
      });
      root.classList.add(`font-${font}`);
    };

    applyFont(font);
  }, [font]);

  const setFont = (newFont: Font) => {
    setAppearance({ font: newFont });
    _setFont(newFont);
  };

  const resetFont = () => {
    removeAppearanceField("font");
    _setFont(fonts[0]);
  };

  return (
    <FontContext value={{ font, setFont, resetFont }}>{children}</FontContext>
  );
}

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
