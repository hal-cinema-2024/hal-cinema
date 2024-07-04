import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketFormSchema } from "./TicketSchema";
import { useSeatSelection } from "../../-hooks/useSeatSelection";
import { SelectField } from "../SelectField";
import { option } from "./TicketOption";
export function MovieFormProvider() {
  const methods = useForm({ resolver: zodResolver(ticketFormSchema) });
  const { handleSubmit } = methods;
  const { selectedSeats } = useSeatSelection();
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}

//
