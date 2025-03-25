import { useState } from "react";
import { tabDataSlider } from "../Data/tabData";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="testimonials-main">
      <div className="testimonials-text">
        <h2>TESTIMONIALS</h2>
        <p>
          Discover the stories of our delighted customers - thousands and
          counting!{" "}
        </p>
      </div>
      <div className="testemonials-tab-content">
        <h3>{tabDataSlider[index].title}</h3>
        <p>{tabDataSlider[index].text}</p>
        <div className="testimonial-user">
          <p className="name">{tabDataSlider[index].name}</p>
          <p className="location">{tabDataSlider[index].location}</p>
        </div>
        <div className="testimonial-buttons">
          <button
            onClick={() =>
              setIndex(
                (prev) =>
                  (prev - 1 + tabDataSlider.length) % tabDataSlider.length
              )
            }
          >
            Prev
          </button>
          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % tabDataSlider.length)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
