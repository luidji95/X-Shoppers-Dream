import { useState } from "react";
import { tabDataSlider } from "../../../data/tabData";
import "./testemonials.css";

type TestimonialProps = {
  id: number;
  index: number;
  title: string;
  text: string;
  name: string;
  location: string;
  img: string;
  onPrev: () => void;
  onNext: () => void;
  isActive: boolean;
};

const TestimonialCard = ({
  id,
  index,
  title,
  text,
  name,
  location,
  img,
  onPrev,
  onNext,
  isActive,
}: TestimonialProps) => {
  return (
    <div
      className="testimonial-content"
      style={{
        transform: `translateX(${(id - index) * 100}%)`,
        transition: "transform 0.5s ease",
      }}
    >
      <button className="arrow-btn left" onClick={onPrev}>
        ←
      </button>

      <div className="testimonial-box">
        <h3>{title}</h3>
        <div
          className={`underline ${isActive ? "active" : ""}`}
          onAnimationEnd={onNext}
        ></div>
        <p className="testimonial-text">{text}</p>

        <div className="user-info">
          <img src={img} alt={name} className="user-img" />
          <div>
            <p className="user-name">{name}</p>
            <p className="user-location">{location}</p>
          </div>
        </div>
      </div>

      <button className="arrow-btn right" onClick={onNext}>
        →
      </button>
    </div>
  );
};

export default TestimonialCard;
