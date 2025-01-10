import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../components/form/InputField";
import { orderSchema } from "./OrderSchema";
import { SeatForm } from "./register/SeatForm/SeatForm";
import { createOrder } from "./api";
import { SelectField } from "../../components/form/SelectField";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { useSchedules } from "../../../../mock/hooks/useSchedule";
import { getSchedule } from "../schedule/api";

export function OrderForm() {
  const { movies } = useMovies();
  const { schedules } = useSchedules();
  const methods = useForm({
    resolver: zodResolver(orderSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(async (data) => {
          createOrder({
            userId: "1",
            scheduleId: data.scheduleId,
            movieName: data.movieName,
            theater: await getSchedule(data.scheduleId)
              .then((schedule) => schedule.theater)
              .catch(() => ""),
            orderDetail: data.orderDetail,
          });
          window.location.reload();
        })}
      >
        <SelectField
          select={{
            name: "scheduleId",
          }}
          option={schedules.map((schedule) => ({
            value: schedule.id || "",
            label: schedule.id || "",
          }))}
        />
        <SelectField
          select={{
            name: "movieName",
          }}
          option={movies.map((movie) => ({
            value: movie.id || "",
            label: movie.movieName || "",
          }))}
        />

        <SeatForm scheduleId={methods.getValues("scheduleId")} />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
