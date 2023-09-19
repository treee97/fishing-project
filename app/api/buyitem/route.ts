import { connectToDB } from "@/utils/database";
import MarketplaceTransaction from "@/models/marketplace";
import InventoryModel from "@/models/inventory";

export const dynamic = "force-dynamic";

export const POST = async (req: any) => {
  const { itemIdentifier, quantity, userId } = await req.json();

  try {
    await connectToDB();
    // console.log("itemiden, quanti, userid", itemIdentifier, quantity, userId);

    const marketplaceTransaction = await MarketplaceTransaction.findOne({
      itemIdentifier: itemIdentifier,
    });

    if (!marketplaceTransaction) {
      return new Response("Item not found in the marketplace.", {
        status: 404,
      });
    }

    if (marketplaceTransaction.quantity < quantity) {
      return new Response("Insufficient quantity available.", { status: 400 });
    }

    // Subtract the purchased quantity from the total
    marketplaceTransaction.quantity -= quantity;

    if (marketplaceTransaction.quantity === 0) {
      await MarketplaceTransaction.deleteOne({
        _id: marketplaceTransaction._id,
      });
    } else {
      await marketplaceTransaction.save();
    }

    const inventoryItem = {
      itemIdentifier: marketplaceTransaction.itemIdentifier,
      itemName: marketplaceTransaction.itemName,
      quantity,
      rarity: marketplaceTransaction.rarity,
      price: marketplaceTransaction.price,
      habitat: marketplaceTransaction.habitat,
      // Add more properties as needed
    };

    // Find the user's inventory
    const userInventory = await InventoryModel.findOne({ userId });

    if (!userInventory) {
      // Handle the case where the user's inventory doesn't exist
      return new Response("User inventory not found.", { status: 404 });
    }

    // Check if the user's inventory already contains 16 different items
    if (userInventory.items.length >= 16) {
      // Check if the item already exists in the user's inventory
      const existingItemIndex = userInventory.items.findIndex(
        (item) => item.itemIdentifier === itemIdentifier
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        userInventory.items[existingItemIndex].quantity += quantity;
      } else {
        // If the item doesn't exist, return an error
        return new Response("Inventory is full. Cannot add more items.", {
          status: 400,
        });
      }
    } else {
      // The inventory is not full, so check if the item already exists
      const existingItemIndex = userInventory.items.findIndex(
        (item) => item.itemIdentifier === itemIdentifier
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        userInventory.items[existingItemIndex].quantity += quantity;
      } else {
        // If the item doesn't exist, push it to the inventory
        userInventory.items.push(inventoryItem);
      }
    }

    // Save the updated user inventory
    await userInventory.save();

    return new Response(JSON.stringify(inventoryItem), { status: 201 });
  } catch (error) {
    console.error("Error purchasing item:", error);
    return new Response("Failed to purchase item.", { status: 500 });
  }
};
