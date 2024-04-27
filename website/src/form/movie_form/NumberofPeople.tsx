import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

export const NumberofPeople = () => {
  const data = useFormContext();

  return (
    <>
      <label>Number of People</label>
      <Input {...data.register("number_of_people")} />
    </>
  );
};
