import { OctagonPauseIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [star, SetStar] = useState([]);
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStrarts();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 6000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuartion: Math.random() * 4 + 2,
      });
      SetStar(newStars);
    }
  };

  const [meteor, SetMeteor] = useState([]);

  const generateMeteors = () => {
    const newMeteor = [];
    const numberOfMeteors = 4;

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteor.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuartion: Math.random() * 3 + 3,
      });

      SetMeteor(newMeteor);
    }
  };

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {star.map((star) => (
          <div
            key="star.id"
            className="star aniamte-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              top: star.y + "%",
              left: star.x + "%",
              opacity: star.opacity + "px",
              animationDuartion: star.animationDuartion + "s",
            }}
          />
        ))}
        {meteor.map((meteor) => (
          <div
            key="meteor.id"
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 2 + "px",
              top: meteor.y + "%",
              left: meteor.x + "%",
              animationDelay: meteor.delay,
              animationDuartion: meteor.animationDuartion + "s",
            }}
          />
        ))}
      </div>
    </>
  );
};
