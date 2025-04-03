
import React, { useState } from "react";

const ProductList = ({ products, setMessage }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
