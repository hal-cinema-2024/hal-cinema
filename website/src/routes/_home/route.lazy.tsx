import { createLazyFileRoute } from "@tanstack/react-router";
import { Top } from "./-components/Top";

export const Route = createLazyFileRoute("/_home")({
  component: Top,
});
