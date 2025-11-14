import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

import { Logo } from "@mono/ui/assets/logo";
import { Button } from "@mono/ui/core/button";

import { LocaleSwitcher } from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { useT } from "@/hooks/use-translation";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  const t = useT();

  return (
    <div className="container grid h-svh max-w-none items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        <div className="mb-4 flex items-center justify-center">
          <Logo className="me-2" />
          <h1 className="text-xl font-medium">Mono Admin</h1>
        </div>
        {children}
      </div>

      <div className="absolute top-2 right-2 flex items-center gap-x-2">
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <Link to="/">
            <Home />
            <span className="sr-only">{t("UI.BackToHome")}</span>
          </Link>
        </Button>
        <LocaleSwitcher />
        <ThemeSwitch />
      </div>
    </div>
  );
}
