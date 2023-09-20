"use client";
import { useEffect, useState } from "react";
//next-auth
import { useSession } from "next-auth/react";
//my components
import Title from "@/components/Title";
import InventoryContainer from "@/components/Inventory/InventoryContainer";

const Inventory = () => {
  const { data: session } = useSession();
  const [userInventory, setUserInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
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
    <div className="relative section custom-padding flex items-center justify-center">
      <Title text="Inventory" />
      <InventoryContainer items={userInventory} />
      {/* div flex 
        <invCont />
        <StorageContainer />
      */}
    </div>
  );
};

export default Inventory;
