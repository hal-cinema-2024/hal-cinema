import { DemoFormProvider } from "../demo/DemoFormProvider";
import { FormProvider } from "../demo/DemoFormContext";
function App() {
  return (
    <>
      <FormProvider>
        <DemoFormProvider />
      </FormProvider>
    </>
  );
}

export default App;
