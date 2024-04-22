// LoginFormProvider.js
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Select, Input, SelectItem } from "@nextui-org/react";
const loginSchema = z.object({
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上である必要があります" }),

  select: z.string().min(1, { message: "選択してください" }),
});

export function DemoFormProvider() {
  const animals = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Elephant", value: "elephant" },
    { label: "Tiger", value: "tiger" },
  ];
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

        <label>
          選択
          <Select placeholder='Select an animal'>
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </label>

        <Button type='submit'>ログイン</Button>
      </form>
    </FormProvider>
  );
}
