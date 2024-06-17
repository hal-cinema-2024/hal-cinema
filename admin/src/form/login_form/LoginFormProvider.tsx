import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { loginFormSchema } from "./loginFormSchema";
export function LoginFormProvider() {
  const methods = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputField fieldName="username" />
        <InputField fieldName="password" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
