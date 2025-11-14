import { useT } from "@/hooks/use-translation";

import { ContentSection } from "../components/content-section";
import { AppearanceForm } from "./appearance-form";

export function SettingsAppearance() {
  const t = useT();
  return (
    <ContentSection
      title={t("UI.Appearance")}
      desc={t("Appearance.Description")}
    >
      <AppearanceForm />
    </ContentSection>
  );
}
