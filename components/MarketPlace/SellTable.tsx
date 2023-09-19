"use client";
import { useState, useEffect } from "react";

//next-auth
import { useSession } from "next-auth/react";

//my components
import SellItemDetail from "./SellItemDetail";
import InventoryContainer from "../Inventory/InventoryContainer";
import Message from "../Message";

const SellTable = () => {
  const { data: session } = useSession();
  const [userInventory, setUserInventory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSelectItem = (itemData: any) => {
    // console.log("itemData en el hadnleselect", itemData);
    setSelectedItem(itemData);
  };

  const updateMessage = (newMessage: string | null) => {
    setMessage(newMessage);
  };
  const hideMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        // Make the API request with the user's ID
        const response = await fetch(`/api/getinventory/${session?.user?.id}`);
        const data = await response.json();
        setUserInventory(data.items);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    if (session?.user?.id) {
      fetchInventory();
    }
  }, [session]);
  return (
    <div className="section border border-pink-500 flex justify-center items-center  ">
      <InventoryContainer
        items={userInventory}
        onSelectItem={handleSelectItem} // Pass the handleSelectItem function
      />
      <SellItemDetail selectedItem={selectedItem} onSellItem={updateMessage} />
      {message && (
        <div className="absolute left-0 right-0 bottom-0 w-full  flex items-center  justify-center ">
          <Message text={message} onClose={hideMessage} />
        </div>
      )}
    </div>
  );
  // div con inventoryContainer/>  y  sellContainer flex
};

export default SellTable;
