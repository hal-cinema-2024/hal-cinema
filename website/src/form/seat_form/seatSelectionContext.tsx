import { ReactNode } from "@tanstack/react-router";
import React, { createContext, useContext, useState } from "react";

interface Seat {
  row: string;
  number: number;
}

interface SeatSelectionContextType {
  selectedSeats: Seat[];
  toggleSeatSelection: (seat: Seat) => void;
}

const SeatSelectionContext = createContext<
  SeatSelectionContextType | undefined
>(undefined);

export const useSeatSelection = () => {
  const context = useContext(SeatSelectionContext);
  if (!context) {
    throw new Error(
      "useSeatSelection must be used within a SeatSelectionProvider"
    );
  }
  return context;
};

export const SeatSelectionProvider = ({ children }: ReactNode) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const toggleSeatSelection = (seat: Seat) => {
    setSelectedSeats((prev) => {
      // すでに選択されている座席かどうかを確認します。
      const isAlreadySelected = prev.some(
        (s) => s.row === seat.row && s.number === seat.number
      );
      // すでに選択されている場合、選択を解除します。
      if (isAlreadySelected) {
        return prev.filter(
          (s) => s.row !== seat.row || s.number !== seat.number
        );
      } else {
        // すでに選択されていない場合prevに新しい座席を追加します。
        return [...prev, seat];
      }
    });
  };

  return (
    <SeatSelectionContext.Provider
      value={{ selectedSeats, toggleSeatSelection }}
    >
      {children}
    </SeatSelectionContext.Provider>
  );
};
