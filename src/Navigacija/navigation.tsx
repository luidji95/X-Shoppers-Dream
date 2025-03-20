const Navigation = () => {
  return (
    <nav className="nav-main">
      <div className="nav-title">
        <svg
          className="svg-img"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 9V6a4.5 4.5 0 00-9 0v3m-4.5 0h18l-1.5 11.25a2.25 2.25 0 01-2.25 2H6.75a2.25 2.25 0 01-2.25-2L3 9z"
          />
        </svg>
        <p>X Shoppers Dream</p>
      </div>

      <div className="nav-links">
        <a href="index.html" className="nav-link active">
          Home
        </a>
        <a href="products.html" className="nav-link">
          Products
        </a>
      </div>

      <div className="nav-cart">
        <p>Cart</p>
        <svg
          className="svg-img"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 9V6a4.5 4.5 0 00-9 0v3m-4.5 0h18l-1.5 11.25a2.25 2.25 0 01-2.25 2H6.75a2.25 2.25 0 01-2.25-2L3 9z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
