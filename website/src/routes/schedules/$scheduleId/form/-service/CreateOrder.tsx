import { FieldValues } from "react-hook-form";
import { useSeatSelection } from "../-hooks/useSeatSelection";
import { V1SeatSelect } from "../../../../../../../api/@types";
import { CreateOrderRequestBodyInterface } from "../../../../../../../fe-api/interfaces/order";
import { createOrder } from "../../../../../../../fe-api/repositories/order";

export function CreateOrderService(scheduleId: string, data: FieldValues) {
  const { selectedSeats } = useSeatSelection();

  const seatSelects = selectedSeats.map((seat) => {
    const seatId = Array.isArray(data)
      ? (data[selectedSeats.indexOf(seat)] as number[])
      : (data as unknown as number);
    return {
      seatName: `${seat.row}${seat.number}`,
      seatId: seatId as number,
    };
  });

  const req: CreateOrderRequestBodyInterface = {
    scheduleId: scheduleId,
    seatSelects: seatSelects as V1SeatSelect[],
  };

  const res = createOrder(req);
  console.log(res);
}
