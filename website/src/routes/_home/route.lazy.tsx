import { createLazyFileRoute } from "@tanstack/react-router";
import { Top } from "../_home/components/Top";

export const Route = createLazyFileRoute("/")({
  component: Top,
});
