import React, { useState } from "react";

const Refund = ({ setMessage }) => {
  const [insertedMoney, setInsertedMoney] = useState(0);

  const handleRefund = () => {
    setMessage(`Refunded ₹${insertedMoney}`);
    setInsertedMoney(0);
  };

  return (
    <div>
      <h2>Refund</h2>
      <button onClick={handleRefund}>Refund Money</button>
    </div>
  );
};

export default Refund;
