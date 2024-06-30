import { createRootRoute } from "@tanstack/react-router";
import CommonLayout from "../components/commonlayout";
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: CommonLayout,
});
