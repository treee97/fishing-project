import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB, seedMarketplace } from "@/utils/database";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToDB();

    const randomData = [
      // Generate random data as needed, similar to your previous example
      {
        sellerId: new mongoose.Types.ObjectId(),
        buyerId: new mongoose.Types.ObjectId(),
        itemId: "69",
        itemName: "fish A",
        quantity: 2,
        price: 10,
        rarity: "Rare",
      },
      // Add more sample data as needed
    ];

    await seedMarketplace(randomData);
    console.log("processing the seedMarketplace randomdata.");

    return res
      .status(200)
      .json({ message: "Random data uploaded successfully." });
  } catch (error) {
    console.error("Error uploading random data:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
