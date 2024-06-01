import { createLazyFileRoute } from "@tanstack/react-router";
import { Top } from "../../pages/google_callback/Top";

export const Route = createLazyFileRoute("/google/callback")({
  component: Top,
});
