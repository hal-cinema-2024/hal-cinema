import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UIProvider } from "@yamada-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();
const CLIENT_KEY: string = import.meta.env.VITE_CLIENT_KEY;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <NextUIProvider>
        <GoogleOAuthProvider clientId={CLIENT_KEY}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </GoogleOAuthProvider>
      </NextUIProvider>
    </UIProvider>
  </React.StrictMode>
);
