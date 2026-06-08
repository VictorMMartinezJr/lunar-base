import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 53;
const FRAME_DIRECTORY = "/assets/images/mars-sequence/";
const FRAME_BASE_NAME = "ezgif-frame-";
const FRAME_EXTENSION = ".jpg";

const Mars = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isSequenceReady, setIsSequenceReady] = useState<boolean>(false);
  const [preloadProgress, setPreloadProgress] = useState<number>(0);

  // Get correct path for each frame based on index, ensuring it's between 1 and TOTAL_FRAMES
  const formatFramePath = (index: number) => {
    const safeIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(index)));
    const paddedIndex = String(safeIndex).padStart(3, "0");
    return `${FRAME_DIRECTORY}${FRAME_BASE_NAME}${paddedIndex}${FRAME_EXTENSION}`;
  };

  useEffect(() => {
    if (isMobile) {
      setIsSequenceReady(true);
      return;
    }

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = formatFramePath(i);

      img.onload = () => {
        loadedCount++;
        setPreloadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setIsSequenceReady(true);
        }
      };

      loadedImages[i] = img;
    }
  }, [isMobile]);

  useGSAP(
    () => {
      if (!isSequenceReady || isMobile) return;

      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const drawImageToCanvas = (index: number) => {
        const img = imagesRef.current[index];
        if (!img) return;

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      if (imagesRef.current[1]) {
        imagesRef.current[1].onload = () => drawImageToCanvas(1);
        drawImageToCanvas(1);
      }

      const frameObj = { frameIndex: 1 };

      gsap.to(frameObj, {
        frameIndex: TOTAL_FRAMES,
        snap: "frameIndex",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "top+=1500 top",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: () => {
            drawImageToCanvas(frameObj.frameIndex);
          },
        },
      });

      // Text Animations for Desktop
      gsap.to(".mars-section p", {
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

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawImageToCanvas(frameObj.frameIndex);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    { scope: containerRef, dependencies: [isMobile, isSequenceReady] },
  );

  return (
    <section
      id="mars"
      ref={containerRef}
      className="mars-section relative w-full h-dvh overflow-hidden bg-black"
    >
      {/* Mini Inline Loader Screen */}
      {!isMobile && !isSequenceReady && (
        <div className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center gap-2">
          <p className="text-amber-500 font-orbitron tracking-widest animate-pulse">
            PREPARING MARS DESCENT
          </p>
          <div className="w-32 h-0.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all duration-200"
              style={{ width: `${preloadProgress}%` }}
            />
          </div>
        </div>
      )}

      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>

        {isMobile ? (
          <img
            src="/assets/images/mars.jpg"
            alt="Static view of Mars"
            className="w-full h-full object-cover object-left"
          />
        ) : (
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover block"
          />
        )}
      </div>

      {/* Framer Motion Content for Mobile */}
      {isMobile ? (
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            BEYOND THE MOON BASE
          </motion.p>
          <motion.h2
            className="text-4xl md:text-7xl text-amber-100 font-bold font-orbitron"
            style={{
              filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7))`,
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            FIRST CREWED MARS MISSION:
          </motion.h2>
          <motion.h2
            className="text-6xl md:text-7xl sm:text-8xl text-amber-200 font-bold font-orbitron"
            style={{
              filter: `
                drop-shadow(0 0 5px rgba(239, 68, 68, 0.9))
                drop-shadow(0 0 15px rgba(239, 68, 68, 0.7))`,
            }}
            initial={{ scale: 0, opacity: 0, y: 10 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            2040s
          </motion.h2>
        </div>
      ) : (
        // Desktop text controlled by GSAP classes
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
          <p className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl opacity-0">
            BEYOND THE MOON BASE
          </p>
          <h2
            className="mars-section-h1-1 text-4xl md:text-7xl text-amber-100 font-bold font-orbitron opacity-0"
            style={{
              filter:
                "drop-shadow(0 0 5px rgba(239, 68, 68, 0.9)) drop-shadow(0 0 15px rgba(239, 68, 68, 0.7))",
            }}
          >
            FIRST CREWED MARS MISSION:
          </h2>
          <h2
            className="mars-section-h1-2 text-8xl md:text-7xl text-amber-200 font-bold font-orbitron opacity-0 scale-0"
            style={{
              filter:
                "drop-shadow(0 0 5px rgba(239, 68, 68, 0.9)) drop-shadow(0 0 15px rgba(239, 68, 68, 0.7))",
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
