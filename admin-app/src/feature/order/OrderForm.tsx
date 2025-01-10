import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { orderSchema } from "./OrderSchema";
import { createOrder } from "./api";
import { SelectField } from "../../components/form/SelectField";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { useSchedules } from "../../../../mock/hooks/useSchedule";
import { getSchedule } from "../schedule/api";
import CinemaSeats from "./register/SeatForm/CinemaSeats";
import { useSeatSelection } from "./store/useSeatSelection";
const option = [
  {
    label: "一般",
    value: "0",
  },
  {
    label: "大学生等",
    value: "1",
  },
  {
    label: "中学 高校",
    value: "2",
  },
  {
    label: "小学生 幼児",
    value: "3",
  },
  {
    label: "幼児",
    value: "4",
  },
];

export function OrderForm() {
  const { movies } = useMovies();
  const { schedules } = useSchedules();
  const { selectedSeats } = useSeatSelection();
  const methods = useForm({
    resolver: zodResolver(orderSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(async (data) => {
          if (!selectedSeats) return;
          const orderDetails = selectedSeats.map((seat) => {
            return {
              seatName: seat.row + seat.number,
              priceType: data.priceType,
              price:
                data.priceType === 0
                  ? 1800
                  : data.priceType === 1
                  ? 1500
                  : 1200,
            };
          });
          createOrder({
            userId: "1",
            scheduleId: data.scheduleId || "1",
            movieName: data.movieName || "",
            theater: await getSchedule(data.scheduleId)
              .then((schedule) => schedule.theater as string)
              .catch(() => "シアター１"),
            orderDetail: orderDetails,
          });
          console.log(data);
        })}
      >
        <SelectField
          select={{
            name: "movieName",
          }}
          option={movies.map((movie) => ({
            value: movie.movieName || "",
            label: movie.movieName || "",
          }))}
        />
        <SelectField
          select={{
            name: "scheduleId",
          }}
          option={schedules.map((schedule) => ({
            value: schedule.id || "",
            label: schedule.startTime || "",
          }))}
        />
        <CinemaSeats />
        {selectedSeats &&
          selectedSeats.map((seat, index) => (
            <SelectField
              key={`${seat.row}-${seat.number}-${index}`}
              select={{
                name: `priceType`,
              }}
              option={option}
            />
          ))}
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
