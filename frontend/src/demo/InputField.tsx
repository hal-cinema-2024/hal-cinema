import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { ZodType } from "zod";

type InputFieldProps = {
  id: string;
  label: string;
  schema: ZodType;
};
export const InputField = (props: InputFieldProps) => {
  const { label, schema, id } = props;

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <label>{label}</label>
      <Input {...methods.register(id)} />
      {methods.formState.errors.id?.message as string}
    </div>
  );
};
