import { useEffect } from "react";

export const useIntersectionObserver = <T extends Element>(
  ref: React.RefObject<T | null>
) => {
  useEffect(() => {
    const node = ref.current;
    if (!node) {
      console.log("Ref je null u hook-u");
      return;
    }

    console.log("Observer target:", node);

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

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
};
