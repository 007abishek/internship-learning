import ControlledInput from "./forms/ControlledInput";
import LoginForm from "./forms/LoginForm";
import ValidationForm from "./forms/ValidationForm";
import UncontrolledInput from "./forms/UncontrolledInput";

function App() {
  return (
    <div>
      <ControlledInput />
      <LoginForm />
      <ValidationForm />
      <UncontrolledInput />
    </div>
  );
}

export default App;
