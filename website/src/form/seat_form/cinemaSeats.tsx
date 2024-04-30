import React from "react";
import { useSeatSelection } from "./SeatSelectionContext";

const ROWS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, 26);
const SEATS_PER_ROW = 12;

const CinemaSeats: React.FC = () => {
  const { selectedSeats, toggleSeatSelection } = useSeatSelection();

  return (
    <div>
      {Array.from({ length: ROWS.length }, (_, rowIndex) => (
        <div key={rowIndex}>
          <div style={{ display: "flex" }}>
            {Array.from({ length: SEATS_PER_ROW }, (_, seatIndex) => {
              const seat = { row: ROWS[rowIndex], number: seatIndex + 1 };
              return (
                <button
                  key={`${seat.row}-${seat.number}`}
                  style={{
                    width: "30px",
                    height: "30px",
                    margin: "5px",
                    backgroundColor: selectedSeats.some(
                      (s) => s.row === seat.row && s.number === seat.number
                    )
                      ? "green"
                      : "gray",
                  }}
                  onClick={() => toggleSeatSelection(seat)}
                >
                  {seat.row}
                  {seat.number}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CinemaSeats;
