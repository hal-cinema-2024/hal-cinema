import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { z, ZodString } from "zod";
import { useMovieById } from "../../../../mock/hooks/useMovieById";
import { useSeatSelection } from "./store/useSeatSelection";
import { SelectField } from "../../components/SelectField";

type TicketFormProps = {
  scheduleId: string;
};

export function OrderFormProvider(props: TicketFormProps) {
  const { selectedSeats } = useSeatSelection();
  const { schedule } = useScheduleById(props.scheduleId);
  const { movie } = useMovieById(schedule?.movieId || "");

  const methods = useForm({
    resolver: zodResolver(
      z.object(
        selectedSeats.reduce((acc, seat) => {
          acc[`${seat.row + seat.number}`] = z
            .string()
            .transform((val) => Number(val));
          return acc;
        }, {} as Record<string, z.ZodEffects<ZodString, number, string>>)
      )
    ),
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          const seat = CreateSeatSelects(data, selectedSeats);
          PostOrder({
            userId: "1",
            movieName: movie?.movieName,
            screen: schedule?.theater,
            orderDetail: seat,
          });
        })}
      >
        {selectedSeats &&
          selectedSeats.map((seat) => (
            <SelectField
              select={{
                name: `${seat.row + seat.number}`,
              }}
              option={option}
            />
          ))}
        <Button type='submit' disabled={selectedSeats.length === 0}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
