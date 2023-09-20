import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import MarketplaceTransactionModel from "@/models/marketplace";

// export const dynamic = "force-dynamic";
// Ensure Mongoose is connected to the database
const handler = async (req: any, res: any) => {
  if (req.method === "GET") {
    try {
      await connectToDB();

      const marketplaceData = await MarketplaceTransactionModel.find();
      return NextResponse.json(marketplaceData);
      // res.status(200).json(marketplaceData);
    } catch (error) {
      console.error("Error fetching marketplace data:", error);
      return new Response("Server error", { status: 500 });
    }
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
};

export { handler as GET };
