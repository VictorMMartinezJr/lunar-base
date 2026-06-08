import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Meteors from "../components/Meteors";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isStarsVideoLoaded, setIsStarsVideoLoaded] = useState<boolean>(false);

  const isAppLoading = !isMobile && !isVideoLoaded && !isStarsVideoLoaded;

  // Disable scrolling based on loading status
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isAppLoading) {
      // 1. Lock scrolling
      html.style.overflow = "hidden";
      html.style.height = "100vh";
      body.style.overflow = "hidden";
      body.style.height = "100vh";

      // 2. Disable navbar clicks
      body.style.pointerEvents = "none";
    } else {
      // Restore
      html.style.overflow = "unset";
      html.style.height = "unset";
      body.style.overflow = "auto";
      body.style.height = "unset";
      body.style.pointerEvents = "auto";

      // Force browser repaint and GSAP height calculations
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        ScrollTrigger.refresh();
      }, 50);
    }

    return () => {
      html.style.overflow = "unset";
      html.style.height = "unset";
      body.style.overflow = "auto";
      body.style.height = "unset";
      body.style.pointerEvents = "auto";
    };
  }, [isAppLoading]);

  useGSAP(() => {
    if (isAppLoading) return;

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
  }, [isMobile, isAppLoading]);

  return (
    <section
      id="home"
      className="hero relative overflow-hidden h-dvh col-center text-center text-white"
    >
      {isAppLoading && (
        <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
          <p className="text-xl font-michroma animate-pulse">Counting Down..</p>
        </div>
      )}

      <Meteors />
      <h1 className="moon-title font-michroma">The Return To The Moon</h1>
      <h2
        className="nasa-title font-inter"
        style={{
          filter: `
            drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))
            drop-shadow(0 0 15px rgba(255, 255, 255, 0.7))
            drop-shadow(0 0 30px rgba(255, 255, 255, 0.1)) `,
        }}
      >
        NASA
      </h2>

      {!isMobile && (
        <div className="orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      )}

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
        poster="/assets/images/stars-poster.png"
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className="hero__video--1 absolute w-full h-full inset-0 object-cover z-0"
      />

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
          onCanPlayThrough={() => setIsStarsVideoLoaded(true)}
          poster="/assets/images/stars-poster.png"
          className="hero__video--2 absolute w-full h-full inset-0 object-cover z-0 opacity-0"
        />
      )}
    </section>
  );
};

export default Hero;
