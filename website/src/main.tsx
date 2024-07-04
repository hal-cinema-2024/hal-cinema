import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UIProvider } from "@yamada-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserIdProvider } from "./store/useUserIdContext.tsx";
import { ScheduleProvider } from "./routes/schedules/-store/ScheduleContext.tsx";
import { SeatSelectionProvider } from "./routes/schedules/$scheduleId/form/-store/SeatSelectionContext.tsx";
import { OrderIdProvider } from "./routes/schedules/$scheduleId/form/-store/OrderIdContext.tsx";

const queryClient = new QueryClient();
const CLIENT_ID: string = import.meta.env.VITE_GOOGLE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <UIProvider>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <UserIdProvider>
          <ScheduleProvider>
            <SeatSelectionProvider>
              <OrderIdProvider>
                <UserIdProvider>
                  <App />
                </UserIdProvider>
              </OrderIdProvider>
            </SeatSelectionProvider>
          </ScheduleProvider>
        </UserIdProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </UIProvider>
);
