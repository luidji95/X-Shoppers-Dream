import { useEffect } from "react";

export const useIntersectionObserver = (ref: React.RefObject<Element>) => {
  useEffect(() => {
    if (!ref.current) {
      console.log("Ref je null u hook-u");
      return;
    }

    console.log("Observer target:", ref.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element je VIDLJIV");
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current]);
};
