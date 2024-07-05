import { Input } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
  type?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { fieldName, type } = props;
  const { register, formState } = useFormContext();

  // 数値フィールドの場合、入力値を数値に変換します。
  const registerOptions =
    fieldName === "age"
      ? {
          ...register(fieldName, {
            setValueAs: (value) => (value === "" ? undefined : parseInt(value)), // 入力値が空の場合、undefined を返します。
          }),
        }
      : register(fieldName);

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <Input type={type || "text"} {...registerOptions} />
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
