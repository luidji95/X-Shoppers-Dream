export const sectionAnimation = (section: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      console.log("Entries:", entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("SEKCIJA JE VIDLJIVA");
          entry.target.style.backgroundColor = "yellow";
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
};
