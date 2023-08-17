"use client";
//react hooks
import { useState } from "react";
//react-icons
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SellItemDetail = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    setQuantity(quantity);
  };
  const handleSell = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform the sell action here
    // Call a function to initiate the selling process
    // Send data to the backend, update the inventory, etc.
  };

  return (
    <form
      className="border-2 border-yellow-600 w-2/4 flex flex-col text-light-text dark:text-dark-text"
      onSubmit={handleSell}
    >
      <div className="flex justify-center items-center">
        <p>item name</p>
      </div>
      <div className="flex justify-center items-center">
        <p>Quantity</p>
        <button type="button">
          <BiUpArrow
            className=" text-xl"
            onClick={() => {
              if (quantity >= 0) setQuantity(quantity + 1);
            }}
          />
        </button>
        <input
          type="text"
          className="w-16 text-center"
          maxLength={4}
          min="1"
          value={quantity}
          onChange={onQuantityChange}
        />
        <button>
          <BiDownArrow
            className="text-xl"
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button type="submit" className="border-2">
          Sell
        </button>
      </div>
    </form>
  );
};

export default SellItemDetail;
