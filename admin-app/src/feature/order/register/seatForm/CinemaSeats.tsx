import React from "react";
import { useOrderBySchedule } from "../../../../../../mock/hooks/useOrderBySchedule";
import { OrdersMock, OrdersDetail } from "../../../../../../mock/types/orders";
import { useSeatSelection } from "../../store/useSeatSelection";
const ROWS = "ABCDEF".split("");
const SEATS_PER_ROW = 7;
type Props = {
  scheduleId: string;
};
const CinemaSeats = (props: Props) => {
  const { selectedSeats, toggleSeatSelection } = useSeatSelection();
  const { orderBySchedule } = useOrderBySchedule(props.scheduleId);
  const reservedSeats = orderBySchedule.flatMap((order: OrdersMock) => {
    if (order && order.orderDetail) {
      return order.orderDetail.map((detail: OrdersDetail) => {
        const seatName = detail.seatName;
        if (!seatName) return;
        const row = seatName?.charAt(0);
        const number = parseInt(seatName.slice(1), 10);
        return { row, number };
      });
    }
  });

  return (
    <div style={styles.container}>
      <h2 style={{color: "black"}}>座席予約</h2>
      <p style={{color: "black"}}>ご希望の座席をお選びください。</p>
      <div style={styles.seatGrid}>
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {Array.from({ length: SEATS_PER_ROW }, (_, seatIndex) => {
              const seat = { row, number: seatIndex + 1 };
              const isSelected = selectedSeats.some(
                (s) => s.row === seat.row && s.number === seat.number
              );
              const isReserved = reservedSeats?.some((s) => {
                return s?.row === seat.row && s?.number === seat.number;
              });
              return (
                <button
                  key={`${seat.row}-${seat.number}`}
                  style={{
                    ...styles.seat,
                    backgroundColor: isReserved
                      ? "black"
                      : isSelected
                      ? "red"
                      : "blue",
                    cursor: isReserved ? "not-allowed" : "pointer",
                  }}
                  onClick={() => {
                    if (!isReserved) {
                      toggleSeatSelection(seat);
                    }
                  }}
                  disabled={isReserved}
                >
                  {seat.row}
                  {seat.number}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "blue" }}></div>
          <span style={{color: "black"}}>選択可能(空席)</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "red" }}></div>
          <span style={{color: "black"}}>選択席</span>
        </div>
        <div style={styles.legendItem}>
          <div style={{ ...styles.seat, backgroundColor: "black" }}></div>
          <span style={{color: "black"}}>選択不可(購入済み/販売対象外)</span>
        </div>
      </div>
    </div>
  );
};

// CSSPropertiesを使用してスタイルを定義
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "#2f2f2f",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "fit-content",
    margin: "0 auto",
  },
  seatGrid: {
    display: "grid",
    gap: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
  },
  seat: {
    width: "40px",
    height: "40px",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    textAlign: "center",
    lineHeight: "40px",
    fontSize: "14px",
  },
  legend: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    width: "100%",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
  },
};

export default CinemaSeats;
