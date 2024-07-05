import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  fieldName: string;
};

export const ImageField = (props: InputFieldProps) => {
  const { fieldName } = props;
  const { register, formState } = useFormContext();

  // 数値フィールドの場合、入力値を数値に変換します。

  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <Input
        type='file'
        accept='.png, .jpg'
        multiple
        {...register(fieldName)}
      />
      {formState.errors[fieldName] && (
        <span>{formState.errors[fieldName]!.message as string}</span>
      )}
    </>
  );
};
