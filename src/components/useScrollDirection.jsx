// hooks/useScrollDirection.js
import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDir && Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDir(direction);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [scrollDir]);

  return scrollDir;
}
