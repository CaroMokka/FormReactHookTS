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
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<UserForm {...data} />, <AddressForm {...data}/>, <AccountForm {...data}/>]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
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
