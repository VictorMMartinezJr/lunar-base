import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Mars = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  {
    !isMobile &&
      useGSAP(
        () => {
          const video = videoRef.current;
          const container = containerRef.current;

          if (video == null || container == null) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "top+=1500 top",
              scrub: true,
              pin: true,
              invalidateOnRefresh: true, // Recalculates on mobile for resize/address bar shifts
            },
          });

          const setupVideoAnimation = () => {
            tl.to(video, {
              currentTime: video.duration,
              ease: "none",
            });

            // Tell ScrollTrigger to recalculate heights now that video metadata is ready
            ScrollTrigger.refresh();
          };

          // Handle metadata loading safely
          if (video.readyState >= 1) {
            setupVideoAnimation();
          } else {
            video.onloadedmetadata = setupVideoAnimation;
          }

          // Text Animations
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
        },
        { scope: containerRef },
      );
  }

  return (
    <section
      id="mars"
      ref={containerRef}
      className="mars-section relative w-full h-dvh overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>
        {/* Video or Image */}
        {isMobile ? (
          <img
            src="/assets/images/mars.jpg"
            className="w-full h-full object-cover object-left"
          />
        ) : (
          <video
            ref={videoRef}
            src="/assets/videos/mars_scannable.mp4"
            playsInline
            muted
            preload="auto"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Text */}
      {isMobile ? (
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl opacity-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            BEYOND THE MOON BASE
          </motion.p>
          <motion.h2
            className="mars-section-h1-1 text-4xl md:text-7xl text-amber-100 font-bold font-orbitron opacity-0"
            style={{
              filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))  /* Inner glow */
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7)) /* Outer glow  */`,
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            FIRST CREWED MARS MISSION:
          </motion.h2>
          <motion.h2
            className="mars-section-h1-2 text-6xl md:text-7xl sm:text-8xl text-amber-200 font-bold font-orbitron opacity-0"
            style={{
              filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))  /* Inner glow */
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7)) /* Outer glow  */ `,
            }}
            initial={{ scale: 0, opacity: 0, y: 10 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            2040s
          </motion.h2>
        </div>
      ) : (
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
          <p className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl opacity-0">
            BEYOND THE MOON BASE
          </p>
          <h2
            className="mars-section-h1-1 text-4xl md:text-7xl text-amber-100 font-bold font-orbitron opacity-0"
            style={{
              filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))  /* Inner glow */
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7)) /* Outer glow  */ `,
            }}
          >
            FIRST CREWED MARS MISSION:
          </h2>
          <h2
            className="mars-section-h1-2 text-8xl md:text-7xl text-amber-200 font-bold font-orbitron opacity-0 scale-0"
            style={{
              filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))  /* Inner glow */
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7)) /* Outer glow  */ `,
            }}
          >
            2040s
          </h2>
        </div>
      )}
    </section>
  );
};

export default Mars;
