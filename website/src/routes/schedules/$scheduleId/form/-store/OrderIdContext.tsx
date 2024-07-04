import React, { createContext, useState, ReactNode } from "react";

// Contextの型を正しく定義します
interface ScheduleContextType {
  orderId: string;
  setOrderId: React.Dispatch<React.SetStateAction<string>>;
}

// Contextを作成します
const OrderIdContext = createContext<ScheduleContextType | undefined>(
  undefined
);

// プロバイダーコンポーネントを作成します
const OrderIdProvider = ({ children }: { children: ReactNode }) => {
  const [orderId, setOrderId] = useState<string>(""); // 初期値を設定

  return (
    <OrderIdContext.Provider
      value={{
        orderId,
        setOrderId,
      }}
    >
      {children}
    </OrderIdContext.Provider>
  );
};

export { OrderIdProvider, OrderIdContext };
