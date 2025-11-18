import { getRouteApi } from "@tanstack/react-router";

import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";

import { UserDialog } from "./components/user-dialog";
import { UserPrimaryButton } from "./components/user-primary-button";
import { UserProvider } from "./components/user-provider";
import { UserTable } from "./components/user-table";
import { users } from "./data/users";

const route = getRouteApi("/_authenticated/users/");

export function Users() {
  const search = route.useSearch();
  const navigate = route.useNavigate();

  return (
    <UserProvider>
      <Header fixed>
        <Search />
        <div className="ms-auto flex items-center space-x-4">
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className="flex flex-1 flex-col gap-4 sm:gap-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">User List</h2>
            <p className="text-muted-foreground">
              Manage your users and their roles here.
            </p>
          </div>
          <UserPrimaryButton />
        </div>
        <UserTable data={users} search={search} navigate={navigate} />
      </Main>

      <UserDialog />
    </UserProvider>
  );
}
