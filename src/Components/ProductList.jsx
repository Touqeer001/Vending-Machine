import React, { useContext } from "react";
import { ProductContext } from "../ContextApi/ProductContext";
import "../global.css"

const ProductList = ({ products, setMessage }) => {
  const { setSelectedProduct } = useContext(ProductContext);

  const handleClick = (product) => {
    setSelectedProduct(product);
    setMessage(`You selected ${product.name}. Insert ₹${product.price}.`);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <button className="btn" key={product.id} onClick={() => handleClick(product)}>
          {product.name} - ₹{product.price}
        </button>
      ))}
    </div>
  );
};

export default ProductList;
