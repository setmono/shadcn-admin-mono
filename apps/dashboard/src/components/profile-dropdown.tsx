import { Link } from "@tanstack/react-router";
import { LogOut, Settings, UserCog } from "lucide-react";

import { formatShortcut } from "@mono/lib/os-detecter";
import { Avatar, AvatarFallback, AvatarImage } from "@mono/ui/core/avatar";
import { Button } from "@mono/ui/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@mono/ui/core/dropdown-menu";

import { SignOutDialog } from "@/components/dialog/sign-out-dialog";
import { useDialog } from "@/hooks/use-dialog";
import { useT } from "@/hooks/use-translation";

export function ProfileDropdown() {
  const [open, setOpen] = useDialog();
  const t = useT();

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="User Avatar" />
              <AvatarFallback>MO</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col gap-1.5">
              <p className="text-sm leading-none font-medium">mono</p>
              <p className="text-muted-foreground text-xs leading-none">
                mono@admin.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to="/settings">
                <UserCog />
                {t("UI.Profile")}
                <DropdownMenuShortcut>
                  {formatShortcut("cmd", "shift", "P")}
                </DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">
                <Settings />
                {t("UI.Settings")}
                <DropdownMenuShortcut>
                  {formatShortcut("cmd", "S")}
                </DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={() => setOpen(true)}>
            <LogOut />
            {t("UI.SingOut")}
            <DropdownMenuShortcut className="text-current">
              {formatShortcut("cmd", "shift", "Q")}
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  );
}
