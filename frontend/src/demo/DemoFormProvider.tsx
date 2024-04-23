import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@nextui-org/react";
import { InputField } from "./InputField";
import { useFormContext } from "./DemoFormContext";

const schema = z.object({
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上である必要があります" }),
});

export const DemoFormProvider = () => {
  const { formData, setFormData } = useFormContext();
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: formData.username,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // 次のページへの遷移ロジック
  });

  return (
    <form onSubmit={onSubmit}>
      <InputField id='username' label='ユーザー名' />
      <Button type='submit'>次へ</Button>
    </form>
  );
};
