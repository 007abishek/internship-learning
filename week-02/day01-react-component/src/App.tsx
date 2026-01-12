import Header from "./components/functional/Header";
import UserCard from "./components/functional/UserCard";
import Status from "./components/functional/Status";
import Counter from "./components/state/Counter";
import LegacyHeader from "./components/classbased/LegacyHeader";

function App() {
  return (
    <div>
      <Header />

      <UserCard
        name="Abishek"
        role="Developer"
      />

      <Status isOnline={false} />

      <Counter />
      <LegacyHeader/>
    </div>
  );
}

export default App;
