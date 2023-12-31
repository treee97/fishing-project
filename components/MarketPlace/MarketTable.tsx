"use client";
import React, { useState, useEffect } from "react";
import MarketItemRow from "./MarketItemRow";
import { useRouter } from "next/navigation";

// import { revalidatePath } from "next/cache";
export const revalidate = 0;

const MarketTable = () => {
  const [marketData, setMarketData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getmarketplace", {
          cache: "no-store",
        });
        console.log("response is being called!");

        const data = await response.json();
        setMarketData(data);
        router.refresh();
        console.log("page is refreshed?");
      } catch (error) {
        console.error("Error fetching marketplace data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section flex justify-center items-center">
      <table className="overflow-hidden text-lg table-fixed border border-slate-500 text-light-text dark:text-light-text w-4/5 rounded-lg">
        <tbody>
          <tr className="text-dark-text dark:text-light-text bg-dark-background dark:bg-light-background">
            <th className="border border-slate-600">Item</th>
            <th className="border border-slate-600">Rarity</th>
            <th className="border border-slate-600">Quantity</th>
            <th className="border border-slate-600">Price/u.</th>
            <th className="border border-slate-600">Purchase</th>
          </tr>
          {marketData.map((item, index) => (
            <MarketItemRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
