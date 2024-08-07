import React, { createContext, useState, ReactNode } from "react";

// Contextの型を正しく定義します
interface ScheduleContextType {
  scheduleId: number;
  setScheduleId: React.Dispatch<React.SetStateAction<number>>;
  changeId: (index: number) => void;
}

// Contextを作成します
const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined
);

// プロバイダーコンポーネントを作成します
const ScheduleProvider = ({ children }: { children: ReactNode }) => {
  const [scheduleId, setScheduleId] = useState<number>(0); // 初期値を設定
  const changeId = (index: number) => {
    setScheduleId(index);
  };
  return (
    <ScheduleContext.Provider
      value={{
        scheduleId,
        setScheduleId,
        changeId,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export { ScheduleProvider, ScheduleContext };
