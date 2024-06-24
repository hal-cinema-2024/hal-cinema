import { useEffect, useState } from "react";
import { login } from "../../../fe-api/repositories/login";
import { V1GoogleLoginRequest } from "../../../api/@types";

export const useGetParams = () => {
  const [url, setURL] = useState<string>();

  useEffect(() => {
    const reqlogin = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      await setURL(code!);

      await login(code as V1GoogleLoginRequest);
    };
    reqlogin();
  }, []);

  return {
    url,
    setURL,
  };
};
