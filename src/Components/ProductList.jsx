import React, { useContext } from "react";
import { ProductContext } from "../ContextApi/ProductContext";

const ProductList = ({ products, setMessage }) => {
  const { setSelectedProduct } = useContext(ProductContext);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setMessage(`You selected ${product.name}. Insert ₹${product.price}.`);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <button key={product.id} onClick={() => handleSelectProduct(product)}>
          {product.name} - ₹{product.price}
        </button>
      ))}
    </div>
  );
};

export default ProductList;
