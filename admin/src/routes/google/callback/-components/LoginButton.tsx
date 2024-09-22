import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@yamada-ui/react";
import { login } from "../../../../../../fe-api/repositories/login";
import { UserIdContext } from "../../../../store/useUserIdContext";
import { useContext } from "react";
import { V1GoogleLoginRequest } from "../../../../../../api/@types";
export function LoginButton() {
  const { setUserId } = useContext(UserIdContext);

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
      const requestData: V1GoogleLoginRequest = {
        code: decoded,
      };
      const res = await login(requestData);
      if (res) {
        setUserId(res.userId!);
      }
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
