import { useEffect, useState } from "react";
import { login } from "../../../fe-api/repositories/login";
import { V1GoogleLoginRequest } from "../../../api/@types";

export const useGetGoogleParams = () => {
  const [url, setURL] = useState<V1GoogleLoginRequest>();
  const reqlogin = async () => {
    const code = new URLSearchParams(window.location.search).get("code");
    await setURL({ code: code! });

    await login({ code: code! });
  };
  useEffect(() => {
    reqlogin();
  }, [url]);

  return {
    url,
    setURL,
  };
};
