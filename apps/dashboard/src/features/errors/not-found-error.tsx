import { useNavigate, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { Button } from "@mono/ui/core/button";

import { PageError } from "@/components/page-error";

export function NotFoundError() {
  const navigate = useNavigate();
  const { history } = useRouter();
  const { t } = useTranslation();

  return (
    <PageError
      title="404"
      info={t("NotFound.Title")}
      message={t("NotFound.Description")}
    >
      <Button variant="outline" onClick={() => history.go(-1)}>
        {t("UI.GoBack")}
      </Button>
      <Button onClick={() => navigate({ to: "/" })}>
        {t("UI.BackToHome")}
      </Button>
    </PageError>
  );
}
