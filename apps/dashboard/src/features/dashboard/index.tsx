import { Header } from "@/components/layout/header";
import { TopNav } from "@/components/layout/top-nav";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";
import { useT } from "@/hooks/use-translation";

export function Dashboard() {
  const t = useT();

  const topNav = [
    {
      title: t("UI.Overview"),
      href: "/",
      isActive: true,
      disabled: false,
    },
    {
      title: t("UI.Projects"),
      href: "dashboard/projects",
      isActive: false,
      disabled: false,
    },
    {
      title: t("UI.Products"),
      href: "dashboard/products",
      isActive: false,
      disabled: true,
    },
    {
      title: t("UI.Devices"),
      href: "dashboard/devices",
      isActive: false,
      disabled: true,
    },
    {
      title: t("UI.Settings"),
      href: "dashboard/settings",
      isActive: false,
      disabled: true,
    },
  ];

  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ms-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
    </>
  );
}
