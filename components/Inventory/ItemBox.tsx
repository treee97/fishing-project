// ItemBox.js
import { TfiClose } from "react-icons/tfi";

import Item from "./Item";

interface IitemBox {
  itemData: {
    itemIdentifier: string;
    itemName: string;
    rarity: string;
    quantity: number;
    habitat: string[];
    price: number;
  } | null;
  onClick: () => void;
}

const ItemBox = ({ itemData, onClick }: IitemBox) => {
  return (
    <div
      className="bg-dark-background m-1 rounded-md dark:bg-light-background text-dark-text dark:text-light-text border-2 border-dark-primary w-16 h-16 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      {itemData ? (
        <Item key={itemData.itemIdentifier} quantity={itemData.quantity} />
      ) : (
        <TfiClose className="opacity-50" />
      )}
    </div>
  );
};

export default ItemBox;
