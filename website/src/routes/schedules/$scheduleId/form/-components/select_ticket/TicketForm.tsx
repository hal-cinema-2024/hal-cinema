import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketFormSchema } from "./TicketSchema";
export function MovieFormProvider() {
  const methods = useForm({ resolver: zodResolver(ticketFormSchema) });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}

//
