import { Button } from "@yamada-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectField } from "../SelectField";
import { option } from "./TicketOption";
export const movieFormSchema = z.object({
  number_of_people: z.number(),
  ticket_type: z.string(),
  select: z.string(),
});

export function MovieFormProvider() {
  const methods = useForm({ resolver: zodResolver(movieFormSchema) });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <SelectField
          fieldName='ticket_type'
          label='チケット選択'
          option={option}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}

//
