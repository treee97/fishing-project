"use client";
import { useEffect, useState } from "react";
//next-auth
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
//axios
import axios from "axios";
//my components
import Title from "@/components/Title";
import InventoryContainer from "@/components/Inventory/InventoryContainer";

const Inventory = () => {
  const { data: session } = useSession();
  const [userInventory, setUserInventory] = useState([]);

  // Use the useEffect hook to make the API call when the component is mounted
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        // Make the API request with the user's ID
        const response = await axios.get(
          `/api/getinventory/${session?.user?.id}`
        );
        setUserInventory(response.data.items);
        // console.log("the response.data.items epic", userInventory);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    // Check if the user is authenticated before making the API request
    if (session?.user?.id) {
      fetchInventory();
    }
  }, [session]); // Add session as a dependency to re-run the effect when the session changes

  return (
    <div className="relative section custom-padding">
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
