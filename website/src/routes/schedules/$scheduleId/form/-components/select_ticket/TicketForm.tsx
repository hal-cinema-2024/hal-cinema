import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketFormSchema } from "./TicketSchema";
import { useSeatSelection } from "../../-hooks/useSeatSelection";
import { SelectField } from "../../../../../../components/SelectField";
import { option } from "./TicketOption";

import { CreateOrderService } from "../../-service/CreateOrder";

type TicketFormProps = {
  scheduleId: string;
};
export function TicketFormProvider(props: TicketFormProps) {
  const { scheduleId } = props;
  console.log(scheduleId);
  const methods = useForm({ resolver: zodResolver(ticketFormSchema) });
  const { handleSubmit } = methods;
  const { selectedSeats } = useSeatSelection();
  if (!scheduleId) return null;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          await CreateOrderService(scheduleId, data);
          console.log(scheduleId);
        })}
      >
        {selectedSeats &&
          selectedSeats.map((seat) => (
            <>
              <SelectField
                key={`${seat.row}-${seat.number}`}
                fieldName={`${seat.row + seat.number}`}
                label={`${seat.row + seat.number}`}
                option={option}
              />
            </>
          ))}
        <Button type='submit' disabled={selectedSeats.length === 0}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}

//
