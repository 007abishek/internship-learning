import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


const App: React.FC =() =>{
  return (
    <div>
      <Header title="React+TypeScript App"/>

      <Card name="React" description="Component-based UI library"/>
      <Card name="TypeScript" description="JavaScript with types"/>

      <Footer/>

    </div>

  );
};

export default App;