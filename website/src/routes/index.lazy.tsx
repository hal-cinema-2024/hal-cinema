import { createLazyFileRoute } from "@tanstack/react-router";
import { Top } from "../pages/top/Top";

export const Route = createLazyFileRoute("/")({
  component: Top,
});
