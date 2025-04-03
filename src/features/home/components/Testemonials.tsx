import { useState } from "react";
import { tabDataSlider } from "../../../data/tabData";
import "./testemonials.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? tabDataSlider.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === tabDataSlider.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section borderbottom">
      <div className="testimonials-header">
        <h4>TESTIMONIALS</h4>
        <p>
          Discover the stories of our delighted
          <br />
          customers – thousands and counting!
        </p>
      </div>

      <div className="testimonial-slider-wrapper">
        {tabDataSlider.map((slide, i) => (
          <TestimonialCard
            key={i}
            id={i}
            index={index}
            title={slide.title}
            text={slide.text}
            name={slide.name}
            location={slide.location}
            img={slide.img}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
