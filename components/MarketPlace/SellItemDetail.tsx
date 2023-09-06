"use client";
//react hooks
import { useState, useEffect } from "react";
import axios from "axios";
//react-icons
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useSession } from "next-auth/react";

const SellItemDetail = ({ selectedItem }: any) => {
  console.log("this is selectedItem inside itemdetail =>", selectedItem);
  const { data: session } = useSession();
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(selectedItem?.price ?? 1);

  useEffect(() => {
    // Update state when a new item is selected
    setQuantity(selectedItem?.quantity || 1);
    setPrice(selectedItem?.price || 1);
  }, [selectedItem]);

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    const maxQuantity = selectedItem?.quantity || 1;

    // Ensure newQuantity is within the valid range (1 to maxQuantity)
    if (newQuantity >= 1) {
      setQuantity(newQuantity <= maxQuantity ? newQuantity : maxQuantity);
      // si la nueva cantidad sigue siendo mas pequeña que el total entonces np. pero si se sobrepasa entonces automaticamente cambia a la cantidad total en nuestro inventario.
    }
  };

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);
    if (newPrice >= 1) {
      setPrice(newPrice);
    }
  };

  const handleSell = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const sellData = {
        ...selectedItem,
        quantity,
        price,
        userId: session?.user?.id,
      };
      console.log("the sellData in itemDetail.tsx", sellData);

      // Make a POST request to your marketplace API
      const response = await axios.post("/api/sellitem", sellData);

      // Handle the response as needed (e.g., show a success message, update inventory, etc.)
      console.log("Item sold:", response.data);
      // Update the user's inventory locally by reducing the quantity
    } catch (error) {
      console.error("Error selling item:", error);
    }
  };

  return (
    <form
      className="border-2 border-yellow-600 w-2/4 flex flex-col text-light-text dark:text-dark-text"
      onSubmit={handleSell}
    >
      <div className="flex justify-center items-center">
        <p>{selectedItem?.itemName || "Select an item"}</p>
      </div>
      <div className="flex justify-center items-center">
        <p>Quantity</p>
        <button type="button">
          <BiUpArrow
            className=" text-xl"
            onClick={() => {
              if (quantity < selectedItem.quantity) setQuantity(quantity + 1);
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
        <button type="button">
          <BiDownArrow
            className="text-xl"
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <p>Price</p>
        <input
          type="text"
          className="w-16 text-center"
          min="1"
          maxLength={6}
          value={price}
          onChange={onPriceChange}
        />
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
