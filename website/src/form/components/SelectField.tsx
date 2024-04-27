import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  name: string;
  label: string;
  options: string[];
};
export const SelectField = (props: InputFieldProps) => {
  const { name, label, options } = props;
  const data = useFormContext();
  return (
    <>
      <Select label={label} {...data.register(name)}>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
