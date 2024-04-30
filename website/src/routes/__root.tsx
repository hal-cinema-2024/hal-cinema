import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SeatSelectionProvider } from "../form/seat_form/SeatSelectionContext";
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <SeatSelectionProvider>
        <Outlet />
      </SeatSelectionProvider>
    </>
  ),
});
