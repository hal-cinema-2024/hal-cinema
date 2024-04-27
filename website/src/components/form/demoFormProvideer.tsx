import { useForm, FormProvider, useFormContext } from "react-hook-form";

export function Formp() {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label>Test</label>
        <input {...register("test", { required: true })} />
        <label>Nested Input</label>
        <Test />
        <input type='submit' />
      </form>
    </FormProvider>
  );
}

function Test() {
  const data = useFormContext();
  return <input {...data.register("bill")} />;
}
