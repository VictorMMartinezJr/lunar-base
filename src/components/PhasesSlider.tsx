import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { PHASES_LIST } from "../constants";
import { motion } from "framer-motion";

const PhasesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isLargeDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useGSAP(() => {
    if (!sliderRef.current || !isDesktop) return;

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".phases-section",
        start: isLargeDesktop ? "top top" : "top top+=100",
        end: `+=${scrollAmount}px`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".phases-section", {
      x: `-${scrollAmount}px`,
      ease: "none",
    });
  });

  return (
    <div ref={sliderRef} className="slider-wrapper mb-4">
      <div className="lg:flex">
        {PHASES_LIST.map((phase) => (
          <div
            key={phase.id}
            className={`phase-card grid grid-cols-1 grid-rows-1 place-items-center xl:w-[70vw] px-2 text-white relative z-30 w-full flex-none gap-4`}
          >
            {/* Drink */}
            <img
              src={phase.imageSrc}
              alt={phase.imageAlt}
              className="row-end-1 object-contain"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="italic font-bold text-center text-2xl md:text-4xl py-4">
                {phase.title}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:text-lg text-lg xl:text-xl 2xl:text-2xl">
                <ul className="flex flex-col justify-between gap-2">
                  {phase.bullets.map((b, i) => (
                    <li key={i}>{`- ${b}`}</li>
                  ))}
                </ul>

                <ul className="grid grid-cols-1 gap-2 md:place-items-center xl:text-xl 2xl:text-2xl">
                  {phase.stats.map((stat, i) => (
                    <li
                      key={i}
                      className="flex items-center lg:justify-center gap-2"
                    >
                      {stat.icon}
                      {stat.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhasesSlider;
