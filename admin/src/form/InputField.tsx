import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
  type?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { fieldName, type } = props;
  const { register, formState } = useFormContext();

  // 数値フィールドの場合、入力値を数値に変換します。

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <Input type={type || "text"} {...register(fieldName)} />
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
