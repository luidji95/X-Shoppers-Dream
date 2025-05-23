import Button from "../../../components/ui/Button";
import "./herosection.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products");
  };
  return (
    <>
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-section-text">
            <h1 className="hero-h1">
              Furniture design to <br></br> make you feel at home
            </h1>
            <p className="parag">Create your perfect space with our desingn.</p>
          </div>
          <div className="hero-buttons">
            <Button variant="primary" onClick={handleNavigateToProducts}>
              Explore products
            </Button>
            <Button variant="secondary">Learn more</Button>
          </div>
        </div>
        <div className="hero-right">
          <img src="public/x-shopper-images/heroimg.png" alt="furniture" />
        </div>
      </section>
      <section className="adds-section">
        <h4 className="adds-title">as featured in</h4>
        <div className="adds-img">
          <img src="/adds/adds1.png" />
          <img src="/adds/adds2.png" />
          <img src="/adds/adds3.png" />
          <img src="/adds/adds4.png" />
          <img src="/adds/adds5.png" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
