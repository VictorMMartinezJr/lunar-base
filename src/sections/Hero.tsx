import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

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

    tl.from(".glass-bg", { opacity: 0 })

      .from(moonSplit.chars, { opacity: 0, y: 20, stagger: 0.02 })
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
    <section className="relative overflow-x-hidden h-dvh flex flex-col justify-center items-center text-center text-white">
      <h1 className="relative moon-title font-bold z-20 text-2xl xs:text-3xl -translate-y-40 md:-translate-y-90">
        The Return To The Moon
      </h1>

      <h2 className="nasa-title absolute z-20 font-bold text-8xl xs:text-9xl sm:text-[200px] md:text-[250px] xl:text-[400px] 2xl:text-[550px] text-shadow-md text-shadow-white">
        NASA
      </h2>

      {/* Bg orbs */}
      <div className="orbs">
        <div className="orb-1 z-5 absolute -right-5 top-50lg:top-90 w-20 h-20 bg-linear-to-tr from-white to-gray-500 rounded-full shadow-white blur-3xl"></div>
        <div className="orb-2 z-5 absolute -left-5 bottom-40 w-20 h-20 bg-linear-to-tr from-white to-gray-500 rounded-full shadow-white blur-3xl"></div>
        <div className="orb-3 z-5 absolute right-50 top-20  w-20 h-20 bg-linear-to-tr from-white to-gray-500 rounded-full shadow-white blur-3xl"></div>
      </div>
      {/* Video */}
      <img
        src="/assets/images/hero.png"
        alt="Astronaut holding the moon in his hands"
        className="hero-img absolute bottom-0 object-contain z-20 scale-150 sm:scale-100"
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
