// ItemBox.js
import React from "react";
import { TfiClose } from "react-icons/tfi";

import Item from "./Item";
import { StaticImageData } from "next/image";

interface IitemBox {
  itemData: {
    itemId: string;
    itemName: string;
    rarity: string;
    quantity: number;
    habitat: string[];
    price: number;
    sprite: StaticImageData; // Change the type to string
  } | null;
}

const ItemBox = ({ itemData }: IitemBox) => {
  const spriteUrl = itemData ? itemData.sprite.src : "";
  return (
    <div className="bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text border-2 w-14 h-14 flex items-center justify-center">
      {itemData ? (
        <Item imageUrl={spriteUrl} quantity={itemData.quantity} />
      ) : (
        <TfiClose className="opacity-50" />
      )}
    </div>
  );
};

export default ItemBox;
