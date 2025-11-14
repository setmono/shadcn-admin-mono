import { useLocation, useNavigate } from "@tanstack/react-router";

import { ConfirmDialog } from "@/components/dialog/confirm-dialog";
import { useAuthStore } from "@/hooks/store/use-auth-store";
import { useT } from "@/hooks/use-translation";

interface SignOutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignOutDialog({ open, onOpenChange }: SignOutDialogProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuthStore();
  const t = useT();

  const handleSignOut = () => {
    auth.reset();
    // Preserve current location for redirect after sign-in
    const currentPath = location.href;
    navigate({
      to: "/sign-in",
      search: { redirect: currentPath },
      replace: true,
    });
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("UI.SingOut")}
      desc={t("SignOut.Description")}
      confirmText={t("UI.SingOut")}
      destructive
      handleConfirm={handleSignOut}
      className="sm:max-w-sm"
    />
  );
}
