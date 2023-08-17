// Item.js
import React from "react";
import QuantityIndicator from "./Quantity";

interface Iitem {
  imageUrl: string;
  quantity: number;
}

const Item = ({ imageUrl, quantity }: Iitem) => {
  return (
    <div className="p-4 relative">
      <img src={imageUrl} alt="Item" />
      <QuantityIndicator quantity={quantity} />
    </div>
  );
};

export default Item;
