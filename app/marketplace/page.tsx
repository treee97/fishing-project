"use client";
// react
import { useState } from "react";
//next-auth
//axios
import axios from "axios";
//my components
import Title from "@/components/Title";
import MarketTable from "@/components/MarketPlace/MarketTable";
import SellTable from "@/components/MarketPlace/SellTable";

const Marketplace = () => {
  const [menu, setMenu] = useState<string>("buy");

  const handleUploadRandomData = async () => {
    console.log("handleupload randomt data");

    try {
      await axios.post("/api/seedmarketplace");
      console.log(
        "Random data uploaded to MarketplaceTransactions collection."
      );
    } catch (error) {
      console.error("Error uploading random data:", error);
    }
  };

  return (
    <div className="relative custom-padding w-full">
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
