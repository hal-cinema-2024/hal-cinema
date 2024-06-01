import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@yamada-ui/react";

export function LoginButton() {
  const login = useGoogleLogin({
    onError: (error) => console.error(error),
    flow: "auth-code", //auth-code は認可コードフロー
    scope: "email profile",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:3000/google/callback",
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return <Button onClick={login}>ログイン</Button>;
}
