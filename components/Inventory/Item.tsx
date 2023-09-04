// Item.js
import QuantityIndicator from "./Quantity";
import Image from "next/image";

interface Iitem {
  quantity: number;
}

const Item = ({ quantity }: Iitem) => {
  return (
    <div className="p-4 relative">
      <Image src="/assets/little_pond.png" width={30} height={30} alt="Item" />
      <QuantityIndicator quantity={quantity} />
    </div>
  );
};

export default Item;
