"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Smooth movement effect for the cursor position
  const smoothX = useSpring(x, { stiffness: 200, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const updateMousePos = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", updateMousePos);
    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("pointerdown", updateMousePos);

    return () => {
      window.removeEventListener("pointermove", updateMousePos);
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("pointerdown", updateMousePos);
    };
  }, [x, y]);

  // Listen for pointer events on links to adjust the cursor's size
  useEffect(() => {
    const handlePointerOver = (e) => {
      if (e.target.closest("a")) {
        setIsHoveringLink(true);
      }
    };

    const handlePointerOut = (e) => {
      if (e.target.closest("a")) {
        setIsHoveringLink(false);
      }
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ scale: isHoveringLink ? 2 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        backgroundColor: "white", // white with mixBlendMode appears black on light backgrounds
        mixBlendMode: "difference", // inverts underlying colors
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
        x: smoothX,
        y: smoothY,
      }}
    />
  );
};

export default Cursor;
