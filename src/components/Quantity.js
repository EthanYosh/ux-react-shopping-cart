import React from "react";

function Quantity(currentNumber) {
  return (
    <span>

      <button onClick={currentNumber.onDecrementQuantity}>-</button>
      {currentNumber.quantity}
      <button onClick={currentNumber.onIncrementQuantity}>+</button>
      
    </span>
  );
}

export default Quantity;