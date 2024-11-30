import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSeatSelection } from "../../-hooks/useSeatSelection";
import { SelectField } from "../../../../../../components/SelectField";
import { option } from "./TicketOption";
import { z, ZodString } from "zod";
import { PostOrder } from "../../../../../../../../mock/hooks/postOrder";
import { CreateSeatSelects } from "../../-service/CreateSeatSelects";
type TicketFormProps = {
  scheduleId: string;
};

export function TicketFormProvider(props: TicketFormProps) {
  const { selectedSeats } = useSeatSelection();
  const { scheduleId } = props;
  const methods = useForm({
    resolver: zodResolver(
      z.object(
        selectedSeats.reduce(
          (acc, seat) => {
            acc[`${seat.row + seat.number}`] = z
              .string()
              .transform((val) => Number(val));
            return acc;
          },
          {} as Record<string, z.ZodEffects<ZodString, number, string>>
        )
      )
    ),
  });
  const { handleSubmit } = methods;
  if (!scheduleId) return null;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          const seat = CreateSeatSelects(data, selectedSeats);
          PostOrder({
            id: Number(scheduleId),
            userId: 1,
            movieName: "movieName",
            screen: "screen",
            orderDetail: seat,
          });
        })}
      >
        {selectedSeats &&
          selectedSeats.map((seat) => (
            <SelectField
              key={`${seat.row}-${seat.number}`}
              fieldName={`${seat.row + seat.number}`}
              label={`${seat.row + seat.number}`}
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
