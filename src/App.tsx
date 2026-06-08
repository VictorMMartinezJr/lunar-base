import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LunarBase from "./sections/LunarBase";
import Phases from "./sections/Phases";
import Mars from "./sections/Mars";
import Footer from "./sections/Footer";
import { useGSAP } from "@gsap/react";
import Gallery from "./sections/Gallery";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main className="overflow-x">
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <LunarBase />
          <Phases />
          <Gallery />
          <Mars />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
