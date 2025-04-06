export const sectionAnimation = (section) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("SEKCIJA JE VIDLJIVA");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
};
