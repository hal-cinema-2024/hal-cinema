import { createLazyFileRoute } from "@tanstack/react-router";
import { Formp } from "../components/form/demoFormProvideer";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Formp />;
}
