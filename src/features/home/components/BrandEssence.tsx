import "./brandessence.css";
import { useEffect, useRef } from "react";
import {
  sectionAnimation,
  useIntersectionObserver,
} from "../../../useIntersectionObserver";

const BrandEssence = () => {
  const brandEssenceRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(brandEssenceRef);
  return (
    <div
      className="creeds-section borderbottom slide-init"
      ref={brandEssenceRef}
    >
      <div className="creeds-text">
        <h2 className="creeds-title">Creeds Section</h2>
        <p className="creeds-p">
          Elevate your home with our attitude of excellence and timeless style.
        </p>
        <div className="creeds-content">
          <div className="creeds-content-same">
            <div className="circle">
              <img
                src="public/flaticons/stars.png"
                className="creeds-icons-pic"
              />
            </div>

            <p className="bold">Radiance</p>
            <p>
              Our commitment to providing sparkling solutions ensures every
              customer enjoys a shining, glowing experience with unmatched
              quality.
            </p>
          </div>
          <div className="creeds-content-same">
            <div className="circle">
              <img
                src="public/flaticons/view.png"
                className="creeds-icons-pic"
              />
            </div>

            <p className="bold">Clarity</p>
            <p>
              With clear vision and keen insight, we guide customers down the
              path to lasting success with exceptional service and anticipation
            </p>
          </div>
          <div className="creeds-content-same">
            <div className="circle">
              <img
                src="public/flaticons/like.png"
                className="creeds-icons-pic"
              />
            </div>

            <p className="bold">Heritage</p>
            <p>
              As a trusted partner, we offer expert guidance, drawing on our
              deep wisdom and wealth of experience to ensure satisfaction and
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandEssence;
