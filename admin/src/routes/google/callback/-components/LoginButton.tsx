import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@yamada-ui/react";
import { login } from "../../../../../../fe-api/repositories/login";
import { UserIdContext } from "../-store/useUserIdContext";
import { useContext } from "react";
export function LoginButton() {
  const { setUserId, userId } = useContext(UserIdContext);

  const googleLogin = useGoogleLogin({
    onError: (error) => console.error(error),
    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    redirect_uri: "http://localhost:3000/google/callback",
    ux_mode: "redirect",

    onSuccess: async (codeResponse) => {
      const code = codeResponse.code;
      const decoded = atob(code);
      const res = await login(decoded);
      console.log(res);
      setUserId(res!);
      console.log(userId);
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
