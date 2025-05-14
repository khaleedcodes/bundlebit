import { useState, useEffect, useRef } from "react";
import DemoBrutalistTheme from "./DemoBrutalistTheme";
import DemoDefaultTheme from "./DemoDefaultTheme";
import DemoMagazineTheme from "./DemoMagazineTheme";
import DemoNeubrutalismTheme from "./DemoNeubrutalismTheme";
import DemoPastelPopTheme from "./DemoPastelPopTheme";
import DemoScrapbookTheme from "./DemoScrapbookTheme";

const DemoBundlePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"in" | "out">(
    "in"
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Array of components to cycle through
  const components = [
    <DemoBrutalistTheme key="brutalist" />,
    <DemoDefaultTheme key="default" />,
    <DemoMagazineTheme key="magazine" />,
    <DemoNeubrutalismTheme key="neubrutalism" />,
    <DemoPastelPopTheme key="pastelpop" />,
    <DemoScrapbookTheme key="scrapbook" />,
  ];

  useEffect(() => {
    // Start the slide cycle
    startSlideInterval();

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Effect to handle the animation state changes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        if (transitionDirection === "out") {
          // When the exit animation is done, update the index and start the entry animation
          setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
          setTransitionDirection("in");
        } else {
          // When the entry animation is done, stop transitioning
          setIsTransitioning(false);
        }
      }, 500); // Match this with the CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, transitionDirection, components.length]);

  const startSlideInterval = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set a new interval
    intervalRef.current = setInterval(() => {
      // Start the exit transition
      setTransitionDirection("out");
      setIsTransitioning(true);
    }, 7000); // Change slide every 7 seconds
  };

  // Pause/resume the slideshow when user interacts with the component
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!intervalRef.current) {
      startSlideInterval();
    }
  };

  return (
    <div
      className="relative w-full h-full min-h-[600px] overflow-hidden perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The rotating 3D container */}
      <div
        className={`
          w-full h-full transform-style-3d transition-transform duration-500
          ${
            isTransitioning && transitionDirection === "out"
              ? "animate-spin-out-right"
              : isTransitioning && transitionDirection === "in"
              ? "animate-spin-in-left"
              : ""
          }
        `}
      >
        {/* Current component */}
        <div className="w-full h-full backface-hidden">
          {components[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default DemoBundlePreview;
