import React from "react";

const Display = ({ message }) => {
  return (
    <div className="msg">
      <h2>Message</h2>
      <p>{message}</p>
    </div>
  );
};

export default Display;
