import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { movieSchema } from "./movieSchema";
import { ImageField } from "../ImageField";
import { createMovie } from "../acrions/movie";
export function MovieForm() {
  const methods = useForm({
    resolver: zodResolver(movieSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          createMovie(data);
          window.location.reload();
        })}
      >
        <InputField fieldName='movieName' />
        <InputField fieldName='director' />
        <InputField fieldName='summary' />
        <ImageField fieldName='thumbnail' />
        <InputField fieldName='link' />
        <InputField fieldName='term' type='number' />
        <InputField fieldName='releaseDate' />
        <InputField fieldName='endDate' />
        <ImageField fieldName='movieImage' />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
