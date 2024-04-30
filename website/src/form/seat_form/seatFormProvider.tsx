import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { seatFormSchema } from "./seatSchema";

export function SeatFormProvider() {
  const methods = useForm({ resolver: zodResolver(seatFormSchema) });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}></form>
    </FormProvider>
  );
}

//
