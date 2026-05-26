import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Meteors from "../components/Meteors";

const Hero = () => {
  useGSAP(() => {
    const nasaSplit = SplitText.create(".nasa-title", {
      type: "chars, words",
    });
    const moonSplit = SplitText.create(".moon-title", {
      type: "chars, words",
    });

    const tl = gsap.timeline({
      delay: 1.5,
      ease: "power2.inOut",
    });

    tl.from(moonSplit.chars, { opacity: 0, y: 20, stagger: 0.02 })
      .from(".hero-img", { opacity: 0 })
      .from(nasaSplit.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
      })
      .from(".orb-1", { opacity: 0 }, "<")
      .from(".orb-2", { opacity: 0 }, "<")
      .from(".orb-3", { opacity: 0 }, "<");
  });

  return (
    <section className="hero relative overflow-hidden h-dvh col-center text-center text-white">
      <Meteors />
      <h1 className="moon-title">The Return To The Moon</h1>

      <h2 className="nasa-title">NASA</h2>

      {/* Bg orbs */}
      <div className="orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      {/* Video */}
      <img
        src="/assets/images/hero.png"
        alt="Astronaut holding the moon in his hands"
        className="hero-img absolute bottom-0 object-contain z-20 scale-150 sm:scale-100 md:max-w-2xl"
      />
      <video
        src="/assets/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full inset-0 object-cover z-0"
      />
    </section>
  );
};

export default Hero;
