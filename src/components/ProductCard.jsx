function ProductCard({ icon, category, name, description, priceLabel, price, priceSuffix }) {
  return (
    <div className="product-card">
      <div className="product-card-top">
        <div className="product-icon-box">
          <span className="material-icons-outlined">{icon}</span>
        </div>
        <span className="category-badge">{category}</span>
      </div>

      <h3>{name}</h3>
      <p className="product-description">{description}</p>

      <hr />

      <div className="product-card-bottom">
        <div>
          <p className="price-label">{priceLabel.toUpperCase()}</p>
          <p className="product-price">
            {price}
            {priceSuffix && <span className="price-suffix">{priceSuffix}</span>}
          </p>
        </div>
        <button className="details-btn">
          Detalles <span className="material-icons-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
