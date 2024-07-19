import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSeatSelection } from "../../-hooks/useSeatSelection";
import { SelectField } from "../../../../../../components/SelectField";
import { option } from "./TicketOption";

import { CreateOrderService } from "../../-service/CreateOrder";
import { z, ZodString } from "zod";

type TicketFormProps = {
  scheduleId: string;
};

export function TicketFormProvider(props: TicketFormProps) {
  const { scheduleId } = props;
  const { selectedSeats } = useSeatSelection(); // 移動されたselectedSeatsの宣言
  const methods = useForm({
    resolver: zodResolver(
      z.object(
        selectedSeats.reduce(
          (acc, seat) => {
            //
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
          CreateOrderService(scheduleId, data);
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
