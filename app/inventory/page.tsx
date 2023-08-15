"use client";

//react-hooks
import { useEffect, useState } from "react";
//my components
import Title from "@/components/Title";
import InventoryContainer from "@/components/Inventory/InventoryContainer";

const InventoryComponent = () => {
  const [inventoryData, setInventoryData] = useState<null>(null);
  // useEffect(() => {
  //   // Fetch the inventory data from the API
  //   fetch("/api/inventory")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("esto es data )> ", data);
  //       setInventoryData(data);
  //     });
  // }, []);

  // if (!inventoryData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="relative">
      <Title text="Inventory" />
      <InventoryContainer />
      {
        // inventoryData.items.map((item) => (
        //   <div key={item.itemId} className="inventory-slot">
        //     <div>Item: {item.itemName}</div>
        //     <div>Quantity: {item.quantity}</div>
        //     <div>Rarity: {item.rarity}</div>
        //     {/* Display more item information as needed */}
        //   </div>
        // ))
      }
    </div>
  );
};

export default InventoryComponent;

// {
//   "userId": "user123",
//   "items": [
//     {
//       "itemId": "item1",
//       "itemName": "Item A",
//       "rarity": "Common",
//       "quantity": 2,
//       "habitat": ["Forest"],
//       "price": 10
//     },
//     {
//       "itemId": "item2",
//       "itemName": "Item B",
//       "rarity": "Rare",
//       "quantity": 1,
//       "habitat": ["Mountain"],
//       "price": 20
//     },
//     // More items...
//   ]
// }
