import { Link } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mono/ui/core/card";

import { AuthLayout } from "@/features/auth/auth-layout";
import { useT } from "@/hooks/use-translation";

import { ForgotPasswordForm } from "./form";

export function ForgotPassword() {
  const t = useT();

  return (
    <AuthLayout>
      <Card className="gap-4">
        <CardHeader>
          <CardTitle className="text-lg tracking-tight">
            {t("Auth.ForgotPassword.Title")}
          </CardTitle>
          <CardDescription>
            {t("Auth.ForgotPassword.Description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground mx-auto px-8 text-center text-sm text-balance">
            {t("Auth.NotHaveAccount") + " "}
            <Link
              to="/sign-up"
              className="hover:text-primary underline underline-offset-4"
            >
              {t("UI.SignUp")}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
