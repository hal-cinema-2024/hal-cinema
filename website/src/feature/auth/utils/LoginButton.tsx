import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@yamada-ui/react";

export function LoginButton() {
  const login = useGoogleLogin({
    onError: (error) => console.error(error),
    flow: "auth-code", //auth-code は認可コードフロー
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    redirect_uri: "http://localhost:5173/google/callback",

    onSuccess: (codeResponse) => {
      console.log(codeResponse.code);
    },
  });

  return <Button onClick={login}>ログイン</Button>;
}
