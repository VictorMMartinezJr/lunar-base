import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Mars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "top+=1500 top",
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };

    gsap.to(".mars-section p ", {
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom 90%",
        scrub: true,
      },
    });
    gsap.to(".mars-section-h1-1", {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.to(".mars-section-h1-2", {
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "top+=1500 top",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="mars"
      ref={containerRef}
      className="mars-section relative w-full h-dvh overflow-hidden"
    >
      {/* LAYER 1: THE BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>
        <video
          ref={videoRef}
          src="/assets/videos/mars_scannable.mp4"
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* LAYER 2: THE STATIONARY TEXT (Locked on top of the video) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
        <p className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl opacity-0">
          BEYOND THE MOON BASE
        </p>
        <h2
          className="mars-section-h1-1 text-4xl md:text-7xl text-amber-100 font-bold font-orbitron opacity-0"
          style={{
            filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))  /* Inner glow */
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7)) /* Outer glow  */
                drop-shadow(0 0 30px rgba(239, 68, 68, 0.5)) /* Far outer glow */ `,
          }}
        >
          FIRST CREWED MARS MISSION:
        </h2>
        <h2
          className="mars-section-h1-2 text-8xl md:text-7xl text-amber-200 font-bold font-orbitron opacity-0 scale-0"
          style={{
            filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))  /* Inner glow */
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7)) /* Outer glow  */
                drop-shadow(0 0 30px rgba(239, 68, 68, 0.5)) /* Far outer glow */ `,
          }}
        >
          2030s
        </h2>
      </div>
    </section>
  );
};

export default Mars;
