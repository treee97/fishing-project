// api/seedmarketplace.ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB, seedMarketplace } from "@/utils/database";
import mongoose from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await connectToDB();

      const randomData = [
        // Generate random data as needed, similar to your previous example
        {
          sellerId: new mongoose.Types.ObjectId(),
          buyerId: new mongoose.Types.ObjectId(),
          itemId: "12",
          itemName: "Octopus",
          quantity: 2000,
          price: 5,
          rarity: "Rare",
        },
        // Add more sample data as needed
      ];

      await seedMarketplace(randomData);
      console.log("Processing the seedMarketplace randomdata.");
      return new Response(JSON.stringify(randomData), { status: 200 });
      // return res
      //   .status(200)
      //   .json({ message: "Random data uploaded successfully." });
    } catch (error) {
      console.error("Error uploading random data:", error);
      // return res.status(500).json({ message: "Serveeeer error" });
      return new Response("Failed to upload the data", { status: 500 });
    }
  } else {
    // return res.status(405).json({ message: "Method nooot allowed" });
    return new Response("method not allowwwwwed", { status: 405 });
  }
};
export { handler as POST };
