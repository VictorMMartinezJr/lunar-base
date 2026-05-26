import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Meteors from "../components/Meteors";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [, setIsVideoLoaded] = useState<boolean>(false);

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

    tl.to(".hero__video--2", { opacity: 1 })
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

    return () => {
      nasaSplit.revert();
      moonSplit.revert();
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      className="hero relative overflow-hidden h-dvh col-center text-center text-white"
    >
      <Meteors />
      <h1 className="moon-title font-michroma">The Return To The Moon</h1>
      <h2
        className="nasa-title font-inter"
        style={{
          filter: `
            drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))  /* Inner white glow */
            drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) /* Outer white glow */
            drop-shadow(0 0 30px rgba(255, 255, 255, 0.1)) /* Far outer fade */ `,
        }}
      >
        NASA
      </h2>
      {/* Bg orbs */}
      {!isMobile && (
        <div className="orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      )}
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
        preload="auto"
        poster="assets/images/stars-poster.png"
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className="hero__video--1 absolute w-full h-full inset-0 object-cover z-0"
      />
      )
      {isMobile ? (
        <img
          src="/assets/images/stars-poster.png"
          className="absolute w-full h-full inset-0 object-cover z-0 opacity-0"
        />
      ) : (
        <video
          src="/assets/videos/moving-stars.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="assets/images/stars-poster.png"
          className="hero__video--2 absolute w-full h-full inset-0 object-cover z-0 opacity-0"
        />
      )}
    </section>
  );
};

export default Hero;
