import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { movieSchema } from "./movieSchema";
import { ImageField } from "../ImageField";
export function MovieFormProvider() {
  const methods = useForm({
    resolver: zodResolver(movieSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputField fieldName='movieName' />
        <InputField fieldName='director' />
        <InputField fieldName='summary' />
        <ImageField fieldName='thumbnail' />
        <InputField fieldName='link' />
        <InputField fieldName='term' />
        <InputField fieldName='releaseDate' />
        <InputField fieldName='endDate' />
        <ImageField fieldName='movieImage' />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
