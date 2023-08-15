// QuantityIndicator.js
import React from "react";
interface IQuantity {
  quantity: number;
}
const QuantityIndicator = ({ quantity }: IQuantity) => {
  return <div className="absolute bottom-0 z-20 right-0">x{quantity}</div>;
};

export default QuantityIndicator;
