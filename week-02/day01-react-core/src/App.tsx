import JsxVsHtml from "./concepts/JsxVsHtml";
import VirtualDom from "./concepts/VirtualDom";
import PropsState from "./concepts/PropsState";
import LifecycleHooks from "./concepts/LifecycleHooks";
import UseStateEffect from "./concepts/UseStateEffect";
import MemoCallback from "./concepts/MemoCallback";

function App() {
  return (
    <div style={{ padding: 12 }}>
      <section style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
        <JsxVsHtml />
      </section>

      <section style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
        <VirtualDom />
      </section>

      <section style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
        <PropsState />
      </section>

      <section style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
        <LifecycleHooks />
      </section>

      <section style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
        <UseStateEffect />
      </section>

      <section style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
        <MemoCallback />
      </section>
    </div>
  );
}

export default App;