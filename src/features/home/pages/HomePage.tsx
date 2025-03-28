import HeroSection from "../components/HeroSection";
import FeaturedProduct from "../../products/components/featuredProducts";
import BrandEssence from "../components/BrandEssence";
import Operations from "../components/Operations";
import Testimonials from "../components/Testemonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProduct />
      <BrandEssence />
      <Operations />
      <Testimonials />
    </>
  );
};

export default HomePage;
