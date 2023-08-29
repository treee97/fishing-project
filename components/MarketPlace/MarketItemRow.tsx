"use client";
import { useState } from "react";
import BuyModal from "./BuyModal";
import { useSession } from "next-auth/react";
import axios from "axios";

type MarketItemRowProps = {
  item: {
    itemId: string;
    itemName: string;
    rarity: string;
    quantity: number;
    price: number;
    // Add other properties as needed
  };
};

const MarketItemRow = ({ item }: MarketItemRowProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmPurchase = (quantity: number) => {
    // Implement logic to confirm purchase with the specified quantity
    console.log(`Confirm purchase of ${quantity} items`);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return "#fdfdfd";
      case "uncommon":
        return "#38ff6a";
      case "rare":
        return "#2E81FF";
      case "legendary":
        return "#e202a7";
      case "exotic":
        return "#FFC530";
      default:
        return "#default-color"; // You can set a default color here
    }
  };
  const rarityColor = getRarityColor(item.rarity);
  return (
    <tr className="odd:bg-zinc-100 even:bg-zinc-300 text-center">
      <td className="p-1 overflow-auto">{item.itemName}</td>
      <td style={{ color: rarityColor }} className="stroke-text">
        {item.rarity}
      </td>
      <td>{item.quantity}</td>

      <td className="stroke-text">{item.price}</td>
      <td className="p-2 ">
        <button
          className="rounded-md bg-dark-primary text-light-secondary px-2 hover:bg-dark-secondary hover:text-white"
          onClick={handleBuyClick}
        >
          Buy
        </button>
        {isModalOpen && (
          <BuyModal
            item={item}
            onClose={handleCloseModal}
            onConfirm={handleConfirmPurchase}
            disabled={isModalOpen}
          />
        )}
      </td>
    </tr>
  );
};

export default MarketItemRow;
