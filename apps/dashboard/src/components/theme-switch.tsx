import { useEffect } from "react";
import { Check, Laptop, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { Button } from "@mono/ui/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mono/ui/core/dropdown-menu";

import type { Theme } from "@/components/context/theme-provider";
import { useTheme } from "@/hooks/use-theme";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const options: { key: Theme; icon: LucideIcon; label: string }[] = [
    { key: "light", icon: Sun, label: t("UI.Light") },
    { key: "dark", icon: Moon, label: t("UI.Dark") },
    { key: "system", icon: Laptop, label: t("UI.System") },
  ];

  /* Update theme-color meta tag
   * when theme is updated */
  useEffect(() => {
    const themeColor = theme === "dark" ? "#020817" : "#fff";
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) metaThemeColor.setAttribute("content", themeColor);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === theme) return;
    setTheme(newTheme);
    toast.success(t("UI.UpdateSuccessful"));
  };

  const getButtonIcon = () => {
    switch (theme) {
      case "light":
        return Sun;
      case "dark":
        return Moon;
      case "system":
        return Laptop;
    }
  };

  const ButtonIcon = getButtonIcon();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <ButtonIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map(({ key, icon: Icon, label }) => (
          <DropdownMenuItem
            key={key}
            onClick={() => applyTheme(key)}
            disabled={theme === key}
          >
            <Icon />
            {label}
            {theme === key && <Check size={14} className="ms-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
