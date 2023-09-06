"use client";
// react
import { useState } from "react";
//next-auth
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

//axios
import axios from "axios";
//my components
import Title from "@/components/Title";
import MarketTable from "@/components/MarketPlace/MarketTable";
import SellTable from "@/components/MarketPlace/SellTable";

const Marketplace = () => {
  const [menu, setMenu] = useState<string>("buy");
  const { data: session } = useSession();
  const router = useRouter();

  const handleUploadRandomData = async () => {
    console.log("handleupload randomt data");
    try {
      if (!session) {
        alert("You cant push data unless you're logged in.");
        router.push("/");
      } else {
        await axios.post("api/seedmarketplace");
        console.log(
          "Randoeem data uploaded to MarketplaceTransactions collection."
        );
      }
    } catch (error) {
      console.error("Error uploading random data:", error);
    }
  };

  return (
    <div className="relative section custom-padding w-full">
      <Title text="Marketplace" />
      <div className="w-full flex items-center justify-center mb-4">
        <button
          className="py-4 mr-2 px-8 rounded-lg border-2 border-light-secondary text-2xl text-light-secondary bg-dark-primary"
          onClick={() => setMenu("buy")}
        >
          Buy
        </button>
        <button
          className="py-4 px-8 rounded-lg border-2 border-light-secondary text-2xl text-light-secondary bg-dark-primary"
          onClick={() => setMenu("sell")}
        >
          Sell
        </button>
      </div>
      {menu === "buy" ? (
        <>
          <MarketTable />
          <button onClick={handleUploadRandomData}>Upload Random Data</button>
        </>
      ) : (
        <>
          <SellTable />
        </>
      )}
    </div>
  );
};

export default Marketplace;
