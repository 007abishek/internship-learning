import SyntheticEventDemo from "./event/SyntheticEventDemo";
import EventHandlers from "./event/EventHandlers";
import BubblingCapturing from "./event/BubblingCapturing";
import PreventDefaultDemo from "./event/PreventDefaultDemo";

function App() {
  return (
    <div>
      <SyntheticEventDemo />
      <EventHandlers />
      <BubblingCapturing />
      <PreventDefaultDemo />
    </div>
  );
}

export default App;
