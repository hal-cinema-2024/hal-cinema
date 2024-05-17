import { createLazyFileRoute } from "@tanstack/react-router";
import { ProfileFormProvider } from "../feature/form/profile_form/profileFormProvider";
import { Top } from "../src/pages/top/Top";

export const Route = createLazyFileRoute("/")({
  component: Top,
});
