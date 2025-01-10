import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../components/form/InputField";
import { orderSchema } from "./OrderSchema";
import { SeatForm } from "./register/SeatForm/SeatForm";
import { createOrder } from "./api";
import { getSchedule } from "../schedule/api";
import { SelectField } from "../../components/form/SelectField";
import { useMovies } from "../../../../mock/hooks/useMovies";

export function OrderForm() {
  const { movies } = useMovies();
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
        <InputField name='scheduleId' />
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
