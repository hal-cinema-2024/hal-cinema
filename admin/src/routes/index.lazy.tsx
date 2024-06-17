import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginFormProvider } from "../form/login_form/LoginFormProvider";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>admin</h1>
      <LoginFormProvider />
    </div>
  );
}
