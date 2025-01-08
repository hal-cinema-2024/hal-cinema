import { useState, useEffect, createContext, ReactNode, FC } from "react";
import { apiGet } from "../../../../../../../util/apiClient";

interface Seat {
  row: string;
  number: number;
}

interface OrderDetail {
  seatName: string;
  priceType: number;
  price: number;
}

interface Order {
  id: string;
  userId: string;
  movieId: string; // movieIdを追加
  screen: string;
  orderDetail: OrderDetail[];
}

interface SeatSelectionContextType {
  selectedSeats: Seat[];
  reservedSeats: Seat[];
  toggleSeatSelection: (seat: Seat) => void;
  seatCount: number;
}

export const SeatSelectionContext = createContext<
  SeatSelectionContextType | undefined
>(undefined);

export const SeatSelectionProvider: FC<{
  children: ReactNode;
  movieId: string;
}> = ({ children, movieId }) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [reservedSeats, setReservedSeats] = useState<Seat[]>([]);
  const [seatCount, setSeatCount] = useState(0);

  // 予約済みの座席を取得する関数
  const fetchReservedSeats = async (movieId: string) => {
    try {
      const response = await apiGet(
        `http://localhost:8012/orders?movieId=${movieId}`
      );
      const orders = response.data.filter(
        (order: Order) => order.movieId === movieId
      );
      const reserved = orders.flatMap((order: Order) =>
        order.orderDetail.map((detail: OrderDetail) => {
          const [row, number] = detail.seatName.split("");
          return { row, number: parseInt(number) };
        })
      );
      setReservedSeats(reserved);
    } catch (error) {
      console.error("Error fetching reserved seats:", error);
    }
  };

  const toggleSeatSelection = (seat: Seat) => {
    setSelectedSeats((prev) => {
      const isAlreadySelected = prev.some(
        (s) => s.row === seat.row && s.number === seat.number
      );
      if (isAlreadySelected) {
        return prev.filter(
          (s) => s.row !== seat.row || s.number !== seat.number
        );
      } else {
        return [...prev, seat];
      }
    });
  };

  useEffect(() => {
    setSeatCount(selectedSeats.length);
    console.log(selectedSeats);
    console.log(seatCount);
  }, [selectedSeats, seatCount]);

  useEffect(() => {
    fetchReservedSeats(movieId).catch((error) =>
      console.error("Error in fetching reserved seats:", error)
    );
  }, [movieId]);

  return (
    <SeatSelectionContext.Provider
      value={{ selectedSeats, reservedSeats, toggleSeatSelection, seatCount }}
    >
      {children}
    </SeatSelectionContext.Provider>
  );
};
