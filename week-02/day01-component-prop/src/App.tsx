import Header from "./components/functional/Header";
import UserCard from "./components/functional/UserCard";
import Counter from "./components/state/Counter";

function App() {
  return (
    <>
      <Header />
      <UserCard name="Abishek" role="software Developer" />
      <Counter />
    </>
  );
}

export default App;
