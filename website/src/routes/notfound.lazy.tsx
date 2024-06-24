import { createLazyFileRoute } from "@tanstack/react-router";
import { ErrorPage } from "../pages/notfound/404";

export const Route = createLazyFileRoute("/notfound")({
  component: ErrorPage,
});
