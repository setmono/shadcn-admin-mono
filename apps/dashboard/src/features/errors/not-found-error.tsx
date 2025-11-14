import { useNavigate, useRouter } from "@tanstack/react-router";

import { Button } from "@mono/ui/core/button";

import { PageError } from "@/components/page-error";
import { useT } from "@/hooks/use-translation";

export function NotFoundError() {
  const navigate = useNavigate();
  const { history } = useRouter();
  const t = useT();

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
