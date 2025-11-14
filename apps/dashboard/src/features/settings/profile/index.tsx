import { useT } from "@/hooks/use-translation";

import { ContentSection } from "../components/content-section";
import { ProfileForm } from "./profile-form";

export function SettingsProfile() {
  const t = useT();

  return (
    <ContentSection title={t("UI.Profile")} desc={t("Profile.Description")}>
      <ProfileForm />
    </ContentSection>
  );
}
