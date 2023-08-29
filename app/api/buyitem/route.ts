import { connectToDB } from "@/utils/database";
import MarketplaceTransaction from "@/models/marketplace";
import InventoryModel from "@/models/inventory";

export const POST = async (req) => {
  const { itemId, quantity, userId } = await req.json();

  try {
    await connectToDB();

    const marketplaceTransaction = await MarketplaceTransaction.findById(
      itemId
    );

    if (!marketplaceTransaction) {
      return new Response("Item not found in the marketplace.", {
        status: 404,
      });
    }

    if (marketplaceTransaction.quantity < quantity) {
      return new Response("Insufficient quantity available.", { status: 400 });
    }

    marketplaceTransaction.quantity -= quantity;

    if (marketplaceTransaction.quantity === 0) {
      await marketplaceTransaction.remove();
    } else {
      await marketplaceTransaction.save();
    }

    const inventoryItem = {
      itemId: marketplaceTransaction.itemId,
      itemName: marketplaceTransaction.itemName,
      quantity,
      rarity: marketplaceTransaction.rarity,
      price: marketplaceTransaction.price,
      // Add more properties as needed
    };

    await InventoryModel.findOneAndUpdate(
      { userId },
      { $push: { items: inventoryItem } },
      { new: true, upsert: true }
    );

    return new Response(JSON.stringify(inventoryItem), { status: 201 });
  } catch (error) {
    console.error("Error purchasing item:", error);
    return new Response("Failed to purchase item.", { status: 500 });
  }
};
