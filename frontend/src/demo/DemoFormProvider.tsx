// LoginFormProvider.js
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
const loginSchema = z.object({
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上である必要があります" }),
});

export function DemoFormProvider() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { errors } = methods.formState;

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <label>
          ユーザー名
          <Input {...methods.register("username")} />
          {errors.username?.message as string}
        </label>
        <label>
          パスワード
          <Input {...methods.register("password")} />
          {errors.password?.message as string}
        </label>
        <Button type='submit'>ログイン</Button>
      </form>
    </FormProvider>
  );
}
