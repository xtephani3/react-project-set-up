import "./App.css";
import { About } from "./Pages/AboutUs/AboutUs.jsx";
import { Approach } from "./Pages/Approach/Approach.jsx";
import { HomePage } from "./Pages/Home/Home.jsx";
import { Stats } from "./Pages/Stats/Stats.jsx";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Stats />
      <Approach />
    </>
  );
}

export default App;
