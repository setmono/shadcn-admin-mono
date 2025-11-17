import {
  AudioWaveform,
  Bug,
  Command,
  Construction,
  FileX,
  GalleryVerticalEnd,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  Lock,
  Package,
  Palette,
  ServerOff,
  Settings,
  ShieldCheck,
  UserCog,
  UserX,
  Users,
} from "lucide-react";

import { ClerkLogo } from "@mono/ui/assets/clerk-logo";

import { type SidebarData } from "@/types/sidebar";

export const sidebarData: SidebarData = {
  user: {
    name: "mono",
    email: "mono@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Mono Admin",
      logo: Command,
      plan: "shadcn | i18n | Tanstack | Vite",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: LayoutDashboard,
        },
        {
          title: "Tasks",
          url: "/tasks",
          badge: "3",
          icon: ListTodo,
        },
        {
          title: "Apps",
          url: "/apps",
          icon: Package,
        },
        {
          title: "Users",
          url: "/users",
          icon: Users,
        },
        {
          title: "SecuredByClerk",
          icon: ClerkLogo,
          items: [
            {
              title: "SignIn",
              url: "/clerk/sign-in",
            },
            {
              title: "SignUp",
              url: "/clerk/sign-up",
            },
            {
              title: "UserManagement",
              url: "/clerk/user-management",
            },
          ],
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: ShieldCheck,
          items: [
            {
              title: "SignIn",
              url: "/sign-in",
            },
            {
              title: "SignIn2Col",
              url: "/sign-in-2",
            },
            {
              title: "SignUp",
              url: "/sign-up",
            },
            {
              title: "ForgotPassword",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        {
          title: "Errors",
          icon: Bug,
          items: [
            {
              title: "Unauthorized",
              url: "/errors/unauthorized",
              icon: Lock,
            },
            {
              title: "Forbidden",
              url: "/errors/forbidden",
              icon: UserX,
            },
            {
              title: "NotFound",
              url: "/errors/not-found",
              icon: FileX,
            },
            {
              title: "InternalServerError",
              url: "/errors/internal-server-error",
              icon: ServerOff,
            },
            {
              title: "MaintenanceError",
              url: "/errors/maintenance-error",
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: UserCog,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: Palette,
            },
          ],
        },
        {
          title: "HelpCenter",
          url: "/help-center",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
