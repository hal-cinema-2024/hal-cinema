import React, { createContext, useContext, useState, ReactNode } from "react";

// Contextの型を正しく定義します
interface ScheduleContextType {
  scheduleId: number;
  setScheduleId: React.Dispatch<React.SetStateAction<number>>;
}

// Contextを作成します
const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined
);

// プロバイダーコンポーネントを作成します
const ScheduleProvider = ({ children }: { children: ReactNode }) => {
  const [scheduleId, setScheduleId] = useState<number>(0); // 初期値を設定

  return (
    <ScheduleContext.Provider value={{ scheduleId, setScheduleId }}>
      {children}
    </ScheduleContext.Provider>
  );
};

// カスタムフックを作成して、コンテキストを簡単に利用できるようにします
const useScheduleId = () => {
  const context = useContext(ScheduleContext);
  if (context === undefined) {
    throw new Error("useScheduleId must be used within a ScheduleProvider");
  }
  return context;
};

export { ScheduleProvider, useScheduleId };
