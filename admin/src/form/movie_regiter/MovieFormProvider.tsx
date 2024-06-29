import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { movieSchema } from "./movieSchema";
export function MovieFormProvider() {
  const methods = useForm({
    resolver: zodResolver(movieSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {/* 各入力フィールドに異なる fieldName を渡します */}
        <InputField fieldName='movieName' />
        <InputField fieldName='director' />
        <InputField fieldName='summary' />
        <InputField fieldName='thumbnail' />
        <InputField fieldName='link' />
        <InputField fieldName='term' />
        <InputField fieldName='releaseDate' />
        <InputField fieldName='endDate' />
        <InputField fieldName='movieImage' />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
