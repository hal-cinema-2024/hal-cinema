import { NativeSelect } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";
type InputFieldProps = {
  select: React.ComponentProps<"select">;
  option: Option[];
};

type Option = {
  value: string | number;
  label: string;
};
export const SelectField = (props: InputFieldProps) => {
  const { select, option } = props;
  const { name } = select;

  const { register, formState } = useFormContext();

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <NativeSelect {...register(name as string)}>
        {option.map((item: Option) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </NativeSelect>
      {formState.errors[name as string] && (
        <span>{formState.errors[name as string]!.message as string}</span>
      )}
    </>
  );
};
