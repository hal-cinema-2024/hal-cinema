import { useEffect, useState } from "react";
import { login } from "../api/repositories/login";
import { V1GoogleLoginRequest } from "../../../api/@types";

export const useGetParams = () => {
  const [url, setURL] = useState<string>();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    setURL(code!);

    login(code as V1GoogleLoginRequest);
  }, []);

  return {
    url,
    setURL,
  };
};
