import { useEffect, useState } from "react";

const Meteors = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateMeteors();

    const handleResize = () => {
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="static border-2 border-red-500 inset-0 overflow-hidden pointer-events-none z-10">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default Meteors;
