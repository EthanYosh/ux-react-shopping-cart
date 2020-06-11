import React from "react";
import Quantity from "./Quantity";







function Product(currentNumber) {
  
  var changeQuantityUp = () => currentNumber.onIncrementQuantity(currentNumber.item.id);
  var changeQuantityDown = () => currentNumber.onDecrementQuantity(currentNumber.item.id);


  return (
    <span>
      {currentNumber.item.name} - {currentNumber.item.price} -
      <Quantity quantity={currentNumber.item.quantity} onIncrementQuantity={changeQuantityUp} onDecrementQuantity={changeQuantityDown}/>
    </span>
  );
}

export default Product;