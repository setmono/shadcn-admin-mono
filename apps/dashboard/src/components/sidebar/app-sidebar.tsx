import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@mono/ui/core/sidebar";

import type { BaseNavItem, SidebarData, SidebarTKey } from "@/types/sidebar";
import { useLayout } from "@/components/context/layout-provider";
// import { AppTitle } from './app-title'
import { NavGroup } from "@/components/sidebar/nav-group";
import { NavUser } from "@/components/sidebar/nav-user";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import { sidebarData } from "@/fake/sidebar-data";

export function AppSidebar() {
  const { collapsible, variant } = useLayout();
  const { t } = useTranslation();

  const sidebarDataNew: SidebarData = useMemo(() => {
    const translateItem = <T extends BaseNavItem>(item: T): T => {
      const translated = {
        ...item,
        title: t(`Sidebar.${item.title}` as SidebarTKey),
      } as T;

      if ("items" in item && item.items) {
        // @ts-expect-error - recurses when items exist
        translated.items = item.items.map(translateItem);
      }

      return translated;
    };

    return {
      ...sidebarData,
      navGroups: sidebarData.navGroups.map((g) => ({
        ...g,
        title: t(`Sidebar.${g.title}` as SidebarTKey),
        items: g.items.map(translateItem),
      })),
    };
  }, [t]);

  return (
    <Sidebar collapsible={collapsible} variant={variant}>
      <SidebarHeader>
        {/* Replace <TeamSwitch /> with the following <AppTitle />
         /* if you want to use the normal app title instead of TeamSwitch dropdown */}
        {/* <AppTitle /> */}
        <TeamSwitcher teams={sidebarDataNew.teams} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarDataNew.navGroups.map((item) => (
          <NavGroup key={item.title} {...item} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarDataNew.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
