import { Outlet } from "@tanstack/react-router";

import { getCookie } from "@mono/lib/cookies";
import { cn } from "@mono/lib/utils";
import { SidebarInset, SidebarProvider } from "@mono/ui/core/sidebar";

import { LayoutProvider } from "@/components/context/layout-provider";
import { SearchProvider } from "@/components/context/search-provider";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export function AuthenticatedLayout({
  children,
}: {
  children?: Readonly<React.ReactNode>;
}) {
  const defaultOpen = getCookie("sidebar_state") !== "false";

  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarInset
            className={cn(
              // Set content container, so we can use container queries
              "@container/content",

              // If layout is fixed, set the height
              // to 100svh to prevent overflow
              "has-data-[layout=fixed]:h-svh",

              // If layout is fixed and sidebar is inset,
              // set the height to 100svh - spacing (total margins) to prevent overflow
              "peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]"
            )}
          >
            {children ?? <Outlet />}
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
