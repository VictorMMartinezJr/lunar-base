import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";

const LunarBase = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".moon-base-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".moon-base__firsttitle", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".moon-base__secondtitle", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".moon-base__thirdtitle", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section
      id="moon-base"
      className="moon-base-section flex-center xs:px-2 sm:px-0"
    >
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>
      <div className="container relative z-10">
        <div className="col-center">
          {/* Benefits List */}
          <div className="font-orbitron col-center text-center z-10">
            <ClipPathTitle
              title={"WE'RE BUILDING A"}
              color={"white"}
              bg={"black"}
              className={"moon-base__firsttitle"}
            />
            <ClipPathTitle
              title={"THREE PHASE"}
              color={"black"}
              bg={"white"}
              className={"moon-base__secondtitle"}
            />
            <ClipPathTitle
              title={"MOON BASE"}
              color={"white"}
              bg={"black"}
              className={"moon-base__thirdtitle"}
            />
          </div>
        </div>
      </div>
      <video
        src="/assets/videos/moon-base.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="absolute w-full h-full inset-0 object-cover z-0"
      />
    </section>
  );
};

export default LunarBase;
