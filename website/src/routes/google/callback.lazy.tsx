import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { login } from "../../api/repositories/login";

export const Route = createLazyFileRoute("/google/callback")({
  component: () =>
    function Page() {
      const navigate = useNavigate();

      const goToHome = () => {
        navigate({ to: "/" });
      };

      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");

      async function loginFunc(code: string) {
        const decoded = atob(code as string);

        login({
          code: decoded,
        });

        goToHome();
      }
      loginFunc(code as string);
    },
});
