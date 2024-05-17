import { createLazyFileRoute } from "@tanstack/react-router";
import { ProfileFormProvider } from "../feature/form/profile_form/profileFormProvider";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <></>;
}
