"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MarketItemRow from "./MarketItemRow";

const MarketTable = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getmarketplace");
        setMarketData(response.data);
      } catch (error) {
        console.error("Error fetching marketplace data:", error);
      }
    };

    fetchData();
  }, []);

  //⁡⁢⁣⁢ SEARCH BAR AND FILTERS !!! SPRINT 7⁡
  return (
    <table className="overflow-hidden text-lg table-fixed border border-slate-500 text-light-text dark:text-light-text w-full rounded-lg">
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
  );
};

export default MarketTable;
