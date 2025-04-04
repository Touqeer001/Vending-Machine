
import React, { useContext } from "react";
import { ProductContext } from "../ContextApi/ProductContext";

const InsertMoney = ({ insertedMoney, setInsertedMoney, setMessage }) => {
  const { selectedProduct } = useContext(ProductContext);

  //function to insert Money 
  const handleInsertMoney = (Rupees) => {
    if (!selectedProduct) {
      setMessage("First Select items from Chips, Soda, Chocolate");
      return;
    }

    const totalMoney = insertedMoney + Rupees;
    setInsertedMoney(totalMoney);

    if (totalMoney >= selectedProduct.price) {
      const change = totalMoney - selectedProduct.price;
      setMessage(
        `Success! You got ${selectedProduct.name}. ${
          change > 0 ? `Change returned: ₹${change}` : ""
        }`
        // "Success"
      );
      setInsertedMoney(0);
    } else {
      setMessage(
        `Inserted ₹${totalMoney}. please add₹ ${
          selectedProduct.price - totalMoney
        } more Money.`
      );
    }
  };

  return (
    <div>
      <h2>Insert Money</h2>
      
      <button className="btn" onClick={() => handleInsertMoney(1)}> ₹1</button>
      <button className="btn" onClick={() => handleInsertMoney(2)}> ₹2</button>
      <button  className="btn" onClick={() => handleInsertMoney(5)}> ₹5</button>
      <button className="btn" onClick={() => handleInsertMoney(10)}> ₹10</button>
      <button className="btn" onClick={() => handleInsertMoney(20)}> ₹20</button>
      <button className="btn"  onClick={() => handleInsertMoney(50)}> ₹50</button>
      <button className="btn" onClick={() => handleInsertMoney(100)}> ₹100</button>
    </div>
  );
};

export default InsertMoney;
