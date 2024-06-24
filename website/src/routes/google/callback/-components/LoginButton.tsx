import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@yamada-ui/react";
import { login } from "../../../../../../fe-api/repositories/login";
import { useNavigate } from "@tanstack/react-router";

export function LoginButton() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate({ to: "/" });
  };

  const googleLogin = useGoogleLogin({
    onError: (error) => console.error(error),

    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    redirect_uri: "http://localhost:3000/google/callback",
    ux_mode: "redirect",

    onSuccess: (codeResponse) => {
      const code = codeResponse.code;
      const decoded = atob(code);
      login({
        code: decoded,
      });
      goToHome;
    },
  });

  return (
    <Button
      onClick={() => {
        googleLogin();
      }}
    >
      ログイン
    </Button>
  );
}
