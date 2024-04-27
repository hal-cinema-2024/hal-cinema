import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  name: string;
  label: string;
};
export const InputField = (props: InputFieldProps) => {
  const { name, label } = props;
  const data = useFormContext();
  return <Input label={label} {...data.register(name)} />;
};
