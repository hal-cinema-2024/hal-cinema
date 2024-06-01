import { useLocation } from "@tanstack/react-router";
import "./Top.css";
import { useEffect, useState } from "react";

type GoogleLoginReq = {
  authorizationCode?: string;
  userAgent: string;
};
type GoogleLoginResponse = {
  userId: string;
};

export const Top = () => {
  const code = new URLSearchParams(useLocation().search).get("code");
  console.log(code);

  const [cond, setCode] = useState<string>("");
  const param: Partial<GoogleLoginReq> = {
    authorizationCode: code ?? "",
  };

  // fetch('http://localhost:3000/login/google',{
  // body: JSON.stringify(param),
  // })

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.example.com/data", {
        body: JSON.stringify(param),
      });
      const data = await response.json();
      if (data && data.code) {
        setCode(data.code);
      }
    })();
  }, []);

  return null;
};

// 映画情報(上映日、映画名、監督名、出演者)
// ここにcssを設定するように書き直す
