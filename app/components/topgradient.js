"use client";

import { useEffect, useState } from "react";

const TopGradient = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Hide the gradient if near the top (within 20px), show otherwise
      const isTop = scrollTop <= 20;
      setIsVisible(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 h-32 sm:h-40 md:h-48 pointer-events-none [backdrop-filter:blur(2px)] [mask:linear-gradient(black_70%,transparent)] z-50`}
    />
  );
};

export default TopGradient;
