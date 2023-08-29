"use client";
import { useState } from "react";
import axios from "axios";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useSession } from "next-auth/react";

type BuyModalProps = {
  item: {
    itemId: string;
    itemName: string;
    quantity: number;
    price: number;
  };
  onClose: () => void; // Callback to close the modal
  onConfirm: (quantity: number) => void; // Callback to confirm the purchase
  disabled: boolean;
};

const BuyModal = ({ item, onClose, onConfirm }: BuyModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { data: session } = useSession();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = Number(e.target.value);

    // Ensure the new quantity is within the valid range
    // newQuantity = Math.max(1, Math.min(newQuantity, item.quantity));

    setQuantity(newQuantity);
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(quantity);
    try {
      await handleBuy();
      onClose();
    } catch (error) {
      console.error("Error purchasing item:", error);
    }
  };

  const handleBuy = async () => {
    try {
      // Send a request to the server to buy the item
      if (!session?.user) {
        console.log("user is not logged in.");
      }
      const userId = session?.user?.id;
      console.log("the userId log is this:", userId);

      if (!userId) {
        console.log("User is not logged in.");
        return;
      }
      const response = await axios.post("/api/buyitem", {
        itemId: item.itemId, // Assuming the marketplace item ID is used here
        quantity,
        userId: "", // use the userId here somehow but not working.
      });

      // You can handle the response here if needed
      console.log("Buy response:", response.data);
    } catch (error) {
      console.error("Error buying item:", error);
    }
  };
  const total = item.price * quantity;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <form
        onSubmit={handleConfirm}
        className="border bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text flex flex-col items-center p-8 rounded-md"
      >
        <h2>{item.itemName}</h2>
        <p>
          Price: <span className="stroke-text">{item.price}</span>
        </p>
        <div className="flex items-center justify-center">
          <button type="button">
            <BiUpArrow
              className="text-xl"
              onClick={() => {
                if (quantity >= 0) setQuantity(quantity + 1);
              }}
            />
          </button>
          <input
            type="text"
            className="w-16 text-center text-light-text bg-light-background dark:text-dark-text dark:bg-dark-background "
            maxLength={4}
            min="1"
            max={item.quantity}
            value={quantity}
            onChange={handleQuantityChange}
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
        <p>
          Total: <span className="stroke-text">{total}</span>
        </p>
        <div className="flex items-center justify-around gap-2">
          <button
            type="submit"
            className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white"
          >
            Confirm
          </button>
          <button
            className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyModal;
