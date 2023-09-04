import { connectToDB } from "@/utils/database";
import UserModel from "@/models/user";
import InventoryModel from "@/models/inventory";

export const GET = async (req: any, { params }: any) => {
  try {
    // Ensure the database is connected
    await connectToDB();
    // Get the userId from the request parameters
    // console.log("the user id in getinventory", userId);

    // Find the user document by userId
    const user = await UserModel.findById(params.id);
    // console.log("the var user ", user);

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Get the user's inventoryId
    const inventoryId = user.inventoryId;
    // console.log("the inventoryId", inventoryId);

    // Find the inventory by inventoryId
    const inventory = await InventoryModel.findById(inventoryId);
    // console.log("the inventory", inventory);

    if (!inventory) {
      return new Response("Inventory not found", { status: 404 });
    }

    // Return the inventory data as JSON
    return new Response(JSON.stringify(inventory), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching inventory data:", error);
    return new Response("Server error", { status: 500 });
  }
};
