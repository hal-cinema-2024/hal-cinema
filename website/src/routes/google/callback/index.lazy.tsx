import { createLazyFileRoute } from "@tanstack/react-router";
import { Result } from "./-components/login_success";

export const Route = createLazyFileRoute("/google/callback/")({
  component: Result,
});
