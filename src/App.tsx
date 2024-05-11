import  { useMultistepForm }  from "./useMultistepForm"
import "./styles/style.css"

function App() {

  const { steps, step, currentStepIndex, isFirstStep, back, next } = useMultistepForm([<div>One</div>, <div>Two</div>])

  return (
    <div className="form-wrapper">
      <form>
        <div className="form-wrapper__step" >{currentStepIndex + 1}/ {steps.length}</div>
        {step}
        <div className="form-wrapper__buttons" >
          { !isFirstStep && <button  type="button" onClick={back} >Back</button> }
          <button type="button" onClick={next} >Next</button>
        </div>
      </form>
    </div>
  )

  
}

export default App;
