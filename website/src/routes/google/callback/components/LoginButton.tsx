import { Button } from "@yamada-ui/react";
import { useLogin } from "../utils/Login";

export function LoginButton() {
  const { googleLogin } = useLogin();

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
