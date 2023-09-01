// api/seedmarketplace.ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB, seedMarketplace } from "@/utils/database";
import mongoose from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await connectToDB();

      // const { userId } = JSON.parse(req.body);
      // console.log("userid yooo", userId);

      const randomData = [
        // Generate random data as needed, similar to your previous example
        {
          sellerId: new mongoose.Types.ObjectId(),
          // buyerId: new mongoose.Types.ObjectId(),
          itemIdentifier: "31",
          itemName: "Fish B",
          quantity: 50,
          price: 120,
          rarity: "Exotic",
          habitat: ["forest", "jungle", "coast"],
        },
        // Add more sample data as needed
      ];

      await seedMarketplace(randomData);
      console.log("Processing the seedMarketplace randomdata.");

      return new Response(JSON.stringify(randomData), { status: 200 });
    } catch (error) {
      console.error("Error uploading random data:", error);

      return new Response("Failed to upload the data", { status: 500 });
    }
  } else {
    return new Response("method not allowwwwwed", { status: 405 });
  }
};
export { handler as POST };
