import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export const profileFormSchema = z.object({
  //人数
  number_of_people: z.number(),
  //券種
  ticket_type: z.string(),
});

export function ProfileFormProvider() {
  const methods = useForm({ resolver: zodResolver(profileFormSchema) });
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input {...register("number_of_people")} />
        <Input {...register("ticket_type")} />
        <Test />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}

//
function Test() {
  const data = useFormContext();
  return <input {...data.register("bill")} />;
}
