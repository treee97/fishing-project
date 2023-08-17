import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/database";
import MarketplaceTransactionModel, {
  MarketplaceTransaction,
} from "@/models/marketplace";

// Ensure Mongoose is connected to the database

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Handle GET request here
    try {
      await connectToDB();

      const transactions: MarketplaceTransaction[] =
        await MarketplaceTransactionModel.find();
      return res.status(200).json(transactions);
    } catch (error) {
      console.error("Error fetching marketplace transactions:", error);
      return res.status(500).json({ message: "Server error" });
    }
  } else if (req.method === "POST") {
    await connectToDB();

    const { sellerId, buyerId, itemId, itemName, quantity, price, rarity } =
      req.body;

    const newTransaction: MarketplaceTransaction = {
      sellerId,
      buyerId,
      itemId,
      itemName,
      quantity,
      price,
      rarity,
    };

    try {
      const createdTransaction: MarketplaceTransaction =
        await MarketplaceTransactionModel.create(newTransaction);
      return res.status(201).json(createdTransaction);
    } catch (error) {
      console.error("Error creating marketplace transaction:", error);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
