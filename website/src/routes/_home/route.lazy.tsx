import { createLazyFileRoute } from "@tanstack/react-router";
import { Top } from "./_components/Top";

export const Route = createLazyFileRoute("/_home")({
  component: Top,
});
