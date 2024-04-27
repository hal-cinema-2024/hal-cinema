import { Radio, RadioGroup } from "@nextui-org/radio";
import { FieldValues, useFormContext } from "react-hook-form";

type RadioFieldProps = {
  id: string;
  label: string;
  options: option[];
};
type option = {
  label: string;
  value: string;
};
export const RadioField = (props: RadioFieldProps) => {
  const { id, label, options } = props;
  const data = useFormContext();

  return (
    <>
      <label>{label}</label>
      <RadioGroup {...data.register(id as FieldValues[typeof id])}>
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    </>
  );
};
