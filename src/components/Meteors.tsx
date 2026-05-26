import { useEffect, useState, useRef } from "react";

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

const Meteors = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // Use a ref to store the last known width of the screen
  const lastWidth = useRef<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const generateMeteors = () => {
    const newMeteors = [];

    for (let i = 0; i < 3; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateMeteors();

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      // ONLY regenerate if the horizontal width actually changed
      if (currentWidth !== lastWidth.current) {
        lastWidth.current = currentWidth; // Update our tracking ref
        generateMeteors();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor opacity-0"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default Meteors;
