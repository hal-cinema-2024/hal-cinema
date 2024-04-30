import { createLazyFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";

// 座席データの生成
const ROWS = "ABCDEFGHIJKL".slice(0, 26); // A-Z
const SEATS_PER_ROW = 12; // 1-12

interface Seat {
  row: string;
  number: number;
}
//Array.from は、配列のようなオブジェクトや反復可能オブジェクトから新しい Array インスタンスを生成します。
const createSeats = (): Seat[][] => {
  // 2次元配列の生成
  return Array.from({ length: ROWS.length }, (_, rowIndex) => {
    // 行数分の配列を生成
    return Array.from({ length: SEATS_PER_ROW }, (_, seatIndex) => ({
      // 列数分の配列を生成
      row: ROWS[rowIndex], //Rowsの配列の中からrowIndex番目の文字を取得
      number: seatIndex + 1, // seatIndexは0から始まるので+1する
    }));
  });
};

const CinemaSeats: React.FC = () => {
  const [seats] = useState<Seat[][]>(createSeats());
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]); //選択された座席の状態を管理する

  // 座席の選択状態をトグルする関数
  const toggleSeatSelection = (seatToToggle: Seat) => {
    const isAlreadySelected = selectedSeats.some(
      (seat) =>
        seat.row === seatToToggle.row && seat.number === seatToToggle.number
    );
    if (isAlreadySelected) {
      setSelectedSeats(
        selectedSeats.filter(
          (seat) =>
            seat.row !== seatToToggle.row || seat.number !== seatToToggle.number
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, seatToToggle]);
    }
  };

  return (
    <div>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div style={{ display: "flex" }}>
            {row.map((seat) => (
              <button
                key={`${seat.row}-${seat.number}`}
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "5px",
                  backgroundColor: selectedSeats.some(
                    (s) => s.row === seat.row && s.number === seat.number
                  )
                    ? "red"
                    : "gray",
                }}
                onClick={() => toggleSeatSelection(seat)}
              >
                {seat.row}
                {seat.number}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Route = createLazyFileRoute("/demo")({
  component: CinemaSeats,
});
