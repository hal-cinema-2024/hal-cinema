import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginFormProvider } from "../form/login_form/LoginFormProvider";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <LoginFormProvider />
    </div>
  );
}
