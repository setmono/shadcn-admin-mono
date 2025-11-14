import { type QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Toaster } from "@mono/ui/core/sonner";

import { NavigationProgress } from "@/components/layout/navigation-progress";
import { GeneralError } from "@/features/errors/general-error";
import { NotFoundError } from "@/features/errors/not-found-error";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => {
    return (
      <>
        <NavigationProgress />
        <Outlet />
        <Toaster />

        {
          // eslint-disable-next-line turbo/no-undeclared-env-vars
          import.meta.env.MODE === "development" && (
            <>
              <ReactQueryDevtools buttonPosition="bottom-left" />
              <TanStackRouterDevtools position="bottom-right" />
            </>
          )
        }
      </>
    );
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
});
