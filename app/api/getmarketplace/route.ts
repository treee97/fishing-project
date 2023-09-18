import { connectToDB } from "@/utils/database";
import MarketplaceTransactionModel from "@/models/marketplace";

// Ensure Mongoose is connected to the database
const handler = async (req: any, res: any) => {
  if (req.method === "GET") {
    try {
      await connectToDB();

      const marketplaceData = await MarketplaceTransactionModel.find();
      // console.log("esto es marketplacedata", marketplaceData);

      return new Response(JSON.stringify(marketplaceData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error fetching marketplace data:", error);
      return new Response("Server error", { status: 500 });
    }
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
};

export { handler as GET };
