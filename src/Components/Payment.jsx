import React, { useState } from "react";

const Payment = ({ setMessage }) => {
  const [insertedMoney, setInsertedMoney] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInsertMoney = (amount) => {
    if (!selectedProduct) {
      setMessage("Please select a product first.");
      return;
    }

    const totalMoney = insertedMoney + amount;
    setInsertedMoney(totalMoney);

    if (totalMoney >= selectedProduct.price) {
      const change = totalMoney - selectedProduct.price;
      setMessage(
        `Success! You bought ${selectedProduct.name}. ${
          change > 0 ? `Change returned: ₹${change}` : ""
        }`
      );
      setInsertedMoney(0);
      setSelectedProduct(null);
    } else {
      setMessage(
        `Inserted ₹${totalMoney}. You need ₹${
          selectedProduct.price - totalMoney
        } more.`
      );
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <button onClick={() => handleInsertMoney(10)}>Insert ₹10</button>
      <button onClick={() => handleInsertMoney(20)}>Insert ₹20</button>
         <button onClick={() => handleInsertMoney(40)}>Insert ₹20</button>
         <button onClick={() => handleInsertMoney(60)}>Insert ₹20</button>

    </div>
  );
};

export default Payment;


// import React from "react";

// const Payment = ({ onInsertMoney }) => {
//   const denominations = [1, 2, 5, 10, 20, 50, 100];

//   return (
//     <div>
//       <h2>Insert Money</h2>
//       {denominations.map((value) => (
//         <button
//           key={value}
//           onClick={() => onInsertMoney(value)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//         >
//           ₹{value}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Payment;
