import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          icon={product.icon}
          category={product.category}
          name={product.name}
          description={product.description}
          priceLabel={product.priceLabel}
          price={product.price}
          priceSuffix={product.priceSuffix}
        />
      ))}
    </div>
  );
}

export default ProductList;
