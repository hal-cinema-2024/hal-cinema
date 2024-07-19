import { FieldValues } from "react-hook-form";
import { useSeatSelection } from "../-hooks/useSeatSelection";
import { V1SeatSelect } from "../../../../../../../api/@types";
import { CreateOrderRequestBodyInterface } from "../../../../../../../fe-api/interfaces/order";
import { createOrder } from "../../../../../../../fe-api/repositories/order";
import { useOrderId } from "../../../../../hooks/useOrderId";

export async function CreateOrderService(
  scheduleId: string,
  data: FieldValues
) {
  const { selectedSeats } = useSeatSelection();
  const { setOrderId } = useOrderId();

  const seatSelects = selectedSeats.map((seat) => {
    const priceType = Array.isArray(data)
      ? (data[selectedSeats.indexOf(seat)] as number[])
      : (data as unknown as number);
    return {
      seatName: `${seat.row}${seat.number}`,
      priceType: priceType as number,
    };
  });

  const req: CreateOrderRequestBodyInterface = {
    scheduleId: scheduleId,
    seatSelects: seatSelects as V1SeatSelect[],
  };

  const res = await createOrder(req);
  console.log(res);
  if (res) setOrderId(res.orderId!);
}
