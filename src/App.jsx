import "./App.css";
import { About } from "./Pages/AboutUs/AboutUs.jsx";
import { Approach } from "./Pages/Approach/Approach.jsx";
import { Footer } from "./Pages/Footer/Footer.jsx";
import { HomePage } from "./Pages/Home/Home.jsx";
import { Instructors } from "./Pages/Instructors/Instructors.jsx";
import { Posts } from "./Pages/Posts/Posts.jsx";
import { Stats } from "./Pages/Stats/Stats.jsx";
import { Testimonial } from "./Pages/Testimonial/Testimonial.jsx";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Stats />
      <Approach />
      <Testimonial />
      <Instructors />
      <Posts />
      <Footer />
    </>
  );
}

export default App;
