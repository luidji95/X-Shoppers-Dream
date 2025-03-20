const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-section-text">
          <h1>
            Furniture design to <br></br> make you feel at home
          </h1>
          <p>Create your perfect space with our desingn</p>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary">Explore products</button>
          <button className="btn-secondary">Learn more ↓</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="public/x-shopper-images/heroimg.png" alt="furniture" />
      </div>
    </section>
  );
};

export default HomePage;
