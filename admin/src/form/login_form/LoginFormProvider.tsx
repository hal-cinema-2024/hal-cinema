import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../components/InputField";
import { loginFormSchema } from "./loginFormSchema";
import styled from "styled-components";
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
        <InputField fieldName='username' />
        <InputField fieldName='password' />
        <SButton type='submit'>ログイン</SButton>
      </form>
    </FormProvider>
  );
}
const SButton = styled(Button)`
  margin-top: 20px;

  &:hover {
    background-color: #fff;
  }
`;
