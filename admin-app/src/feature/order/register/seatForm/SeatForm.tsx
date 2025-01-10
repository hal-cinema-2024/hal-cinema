import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { z, ZodString } from "zod";
import { useMovieById } from "../../../../../../mock/hooks/useMovieById";
import { useSeatSelection } from "../../store/useSeatSelection";
import { SelectField } from "../../../../components/form/SelectField";
import { useScheduleById } from "../../../../../../mock/hooks/useScheduleById";
import { createOrder } from "../../api";
import { CreateSeatSelects } from "./CreateSeatSelects";
type TicketFormProps = {
  scheduleId: string;
};
const option = [
  {
    label: "一般",
    value: 1800,
  },
  {
    label: "大学生等",
    value: 1600,
  },
  {
    label: "中学 高校",
    value: 1500,
  },
  {
    label: "小学生 幼児",
    value: 1000,
  },
  {
    label: "幼児",
    value: 500,
  },
];

export function SeatForm(props: TicketFormProps) {
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
          createOrder({
            userId: "1",
            scheduleId: schedule?.id,
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
