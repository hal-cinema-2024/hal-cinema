import { Button } from "@yamada-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../../components/form/InputField";
import { movieSchema } from "./movieSchema";
import { createMovie } from "../api";
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
        <InputField name='movieName' />
        <InputField name='director' />
        <InputField name='summary' />
        <InputField name='link' />
        <InputField name='term' type='number' />
        <InputField name='releaseDate' />
        <InputField name='endDate' />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
}
