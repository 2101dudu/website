"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

import DarkModeToggle from "../components/darkmodetoggle";

export default function NavBar() {
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  const links = useMemo(
    () => [
      { label: "/home", id: "home" },
      { label: "/about", id: "about" },
      { label: "/projects", id: "projects" },
    ],
    [],
  );

  const updateUnderline = (element) => {
    if (!containerRef.current || !element) return;
    const rect = element.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setUnderlineProps({
      left: rect.left - containerRect.left,
      width: rect.width,
    });
  };

  const handleMouseEnter = (e) => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
    updateUnderline(e.target);
  };

  const handleMouseLeave = () => {
    resetTimeoutRef.current = setTimeout(() => {
      const activeElement = document.querySelector(".active-nav");
      if (activeElement) updateUnderline(activeElement);
    }, 50);
  };

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    const activeElement = document.getElementById(`nav-${activeSection}`);
    if (activeElement) updateUnderline(activeElement);
  }, [activeSection]);

  return (
    <div id="nav" className="fixed w-full z-51">
      <div className="fixed top-0 left-0 right-0 z-50 w-9/10 mx-auto">
        <div className="max-w-screen-xl mx-10 xl:mx-auto flex flex-row md:justify-between justify-center m-10">
          <h1 className="font-bold text-3xl">~/edu</h1>
          <div
            className="hidden relative md:flex md:flex-row gap-10"
            ref={containerRef}
          >
            {links.map((link) => (
              <h1
                key={link.id}
                id={`nav-${link.id}`}
                className={`text-3xl cursor-pointer ${activeSection === link.id ? "active-nav font-bold" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </h1>
            ))}
            <motion.div
              id="highlight"
              className="absolute -bottom-1 h-0.5"
              animate={{
                left: underlineProps.left,
                width: underlineProps.width,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
