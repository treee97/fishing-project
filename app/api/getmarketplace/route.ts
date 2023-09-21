import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import MarketplaceTransactionModel from "@/models/marketplace";

export const dynamic = "force-dynamic";
// Ensure Mongoose is connected to the database
export const GET = async (req: any, res: any) => {
    try {
      await connectToDB();

      const marketplaceData = await MarketplaceTransactionModel.find();
      return NextResponse.json(marketplaceData);
    } catch (error) {
      console.error("Error fetching marketplace data:", error);
      return new Response("Server error", { status: 500 });
    } 
};

