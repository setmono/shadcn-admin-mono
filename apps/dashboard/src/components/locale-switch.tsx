import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { Button } from "@mono/ui/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@mono/ui/core/dropdown-menu";

import { LOCALES, type LocaleCode } from "@/types/locales";
import { setAppearance } from "@/storage/local-storage";

export function LocaleSwitcher() {
  const { t, i18n } = useTranslation();

  const setLocale = (newLocale: LocaleCode) => {
    if (newLocale === i18n.language) return;
    i18n.changeLanguage(newLocale).then(() => {
      setAppearance({ locale: newLocale });
      toast.success(t("UI.UpdateSuccessful"));
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <Languages />
          <span className="sr-only">{t("UI.Language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          {LOCALES.map(({ code, label, flag }) => (
            <DropdownMenuItem
              key={code}
              onClick={() => setLocale(code)}
              disabled={code === i18n.language}
            >
              {flag} {label}
              {code === i18n.language && " ✓"}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
