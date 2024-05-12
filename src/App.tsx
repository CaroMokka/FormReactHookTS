import { useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import "./styles/style.css";
import { UserForm } from "./UseForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AccountForm";
import { FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData( prev => {
      return { ...prev, ...fields }
    } );
  }
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<UserForm {...data} updateFields={updateFields} />, <AddressForm {...data} updateFields={updateFields}/>, <AccountForm {...data} updateFields={updateFields}/>]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if(!isLastStep) return next()
    alert("Completaste el formulario exitosamente")
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit}>
        <div className="form-wrapper__step">
          {currentStepIndex + 1}/ {steps.length}
        </div>
        {step}
        <div className="form-wrapper__buttons">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
