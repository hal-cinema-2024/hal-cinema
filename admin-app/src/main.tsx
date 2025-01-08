import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { UIProvider } from "@yamada-ui/react";
import { BrowserRouter } from "react-router-dom";
import { SeatSelectionProvider } from "./feature/order/store/SeatSelectionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UIProvider>
        <SeatSelectionProvider>
          <App />
        </SeatSelectionProvider>
      </UIProvider>
    </BrowserRouter>
  </StrictMode>
);
