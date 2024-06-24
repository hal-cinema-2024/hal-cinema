import { useGoogleLogin } from "@react-oauth/google";
import { login } from "../../../../api/repositories/login";

export const useLogin = () => {
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
    },
  });

  return { googleLogin };
};
