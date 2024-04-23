// InputField.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@nextui-org/react"; // Next UIのTextFieldコンポーネントを利用

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Textarea {...register(id)} id={id} type={type} fullWidth />
    </div>
  );
};
