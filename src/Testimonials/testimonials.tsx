import { useState } from "react";
import { tabDataSlider } from "../Data/tabData";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { title, text, name, location, img } = tabDataSlider[index];

  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + tabDataSlider.length) % tabDataSlider.length
    );
  const next = () => setIndex((prev) => (prev + 1) % tabDataSlider.length);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h4>TESTIMONIALS</h4>
        <p>
          Discover the stories of our delighted
          <br />
          customers – thousands and counting!
        </p>
      </div>

      <div className="testimonial-content">
        <button className="arrow-btn left" onClick={prev}>
          ←
        </button>

        <div className="testimonial-box">
          <h3>{title}</h3>
          <div className="underline"></div>
          <p className="testimonial-text">{text}</p>

          <div className="user-info">
            <img
              src={img || "https://randomuser.me/api/portraits/women/75.jpg"}
              alt={name}
              className="user-img"
            />
            <div>
              <p className="user-name">{name}</p>
              <p className="user-location">{location}</p>
            </div>
          </div>
        </div>

        <button className="arrow-btn right" onClick={next}>
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
