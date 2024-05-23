import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SeatSelectionProvider } from "../feature/seat_selector/SeatSelectionContext";
import CommonLayout from "../components/Commonlayout";
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: CommonLayout,
});
