"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MarketItemRow from "./MarketItemRow";
import ClientPusher from "@/services/ClientPusher";
import { stringify } from "querystring";

const MarketTable = () => {
  const [marketData, setMarketData] = useState([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getmarketplace");
        setMarketData(response.data);
        // log
      } catch (error) {
        console.error("Error fetching marketplace data:", error);
      }
    };

    fetchData();

    // Subscribe to a Pusher channel
    const marketplaceChannel = ClientPusher.subscribe("marketplace-channel");

    marketplaceChannel.bind("new-item", () => {
      // When a new item event is received, fetch the updated marketplace data
      fetchData();
      // Update the marketData state with the new item
    });

    // Cleanup on component unmount
    return () => {
      marketplaceChannel.unbind_all();
      marketplaceChannel.unsubscribe();
    };
  }, []);

  // const updateMessage = (newMessage: string | null) => {
  // 	setMessage(newMessage);
  // };
  // const hideMessage = () => {
  // 	setMessage(null);
  // };
  //⁡⁢⁣⁢ SEARCH BAR AND FILTERS !!! SPRINT 7⁡
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
            <MarketItemRow key={index} item={item} onBuyItem={message} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
