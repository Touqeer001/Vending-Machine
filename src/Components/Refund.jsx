import React, { useContext } from "react";
import { ProductContext } from "../ContextApi/ProductContext";

const Refund = ({ insertedMoney, setInsertedMoney, setMessage }) => {
  const { setSelectedProduct } = useContext(ProductContext);

  const handleRefund = () => {
    if (insertedMoney > 0) {
      setMessage(`Refunded ₹${insertedMoney}.`);
      setInsertedMoney(0);
      setSelectedProduct(null);
    } else {
      setMessage("No money added .");
    }
  };

  return (
    <div>
      <h2>Refund</h2>
      <button className="btn" onClick={handleRefund}>Cancel & Refund</button>
    </div>
  );
};

export default Refund;
