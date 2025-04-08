import { useEffect } from "react";

export const useIntersectionObsever = (
  sectionRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element je VIDLJIV");

            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef) {
        observer.unobserve(sectionRef);
      }
    };
  }, [sectionRef]);
};
