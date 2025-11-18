import { type LinkProps } from "@tanstack/react-router";

import type Resources from "./resources";

type SidebarKeys = keyof Resources["translation"]["Sidebar"];
export type SidebarTKey = `Sidebar.${SidebarKeys}`;

type User = {
  name: string;
  email: string;
  avatar: string;
};

type Team = {
  name: string;
  logo: React.ElementType;
  plan: string;
};

type BaseNavItem = {
  title: SidebarKeys;
  badge?: string;
  icon?: React.ElementType;
};

type NavLink = BaseNavItem & {
  url: LinkProps["to"] | (string & {});
  items?: never;
};

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps["to"] | (string & {}) })[];
  url?: never;
};

type NavItem = NavCollapsible | NavLink;

type NavGroup = {
  title: string;
  items: NavItem[];
};

type SidebarData = {
  user: User;
  teams: Team[];
  navGroups: NavGroup[];
};

export type {
  BaseNavItem,
  SidebarData,
  NavGroup,
  NavItem,
  NavCollapsible,
  NavLink,
};
