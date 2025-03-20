"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import DarkModeToggle from "../components/darkmodetoggle";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [activeSection, setActiveSection] = useState(
    pathname === "/blog" ? "blog" : "home",
  );
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  const links = useMemo(
    () => [
      { label: "/home", id: "home", scroll: true },
      { label: "/about", id: "about", scroll: true },
      { label: "/projects", id: "projects", scroll: true },
      { label: "/blog", id: "blog", scroll: false },
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

  const handleClick = (link) => {
    // Update the active section immediately.
    setActiveSection(link.id);

    if (!link.scroll) {
      // Blog link: simply navigate to /blog.
      if (pathname !== "/blog") {
        router.push("/blog");
      }
      return;
    } else {
      if (pathname === "/blog") {
        // If on blog page, navigate back to main page with hash.
        router.push(`/#${link.id}`);
      } else {
        // On the main page, scroll to the section.
        const element = document.getElementById(link.id);
        if (element) {
          setIsScrolling(true);
          element.scrollIntoView({ behavior: "smooth" });
          // Disable observer updates briefly to let the smooth scroll finish.
          setTimeout(() => setIsScrolling(false), 800);
        }
      }
    }
  };

  useEffect(() => {
    // When on the blog page, force activeSection to "blog".
    if (pathname === "/blog") {
      setActiveSection("blog");
    }
  }, [pathname]);

  useEffect(() => {
    // IntersectionObserver to update active section when scrolling manually.
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      // If we are scrolling programmatically, do not update.
      if (isScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe only the scrollable sections.
    links
      .filter((link) => link.scroll)
      .forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
      });

    return () => observer.disconnect();
  }, [links, isScrolling]);

  useEffect(() => {
    // Update the underline position when the active section changes.
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
                className={`text-3xl cursor-pointer ${
                  activeSection === link.id ? "active-nav font-bold" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(link)}
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
