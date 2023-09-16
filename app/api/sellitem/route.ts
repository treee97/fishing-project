// api/sellitem.ts
import { connectToDB } from "@/utils/database";
import MarketplaceTransaction from "@/models/marketplace";
import InventoryModel from "@/models/inventory";

export const POST = async (req: any) => {
  const { itemIdentifier, itemName, quantity, price, rarity, habitat, userId } =
    await req.json();
  // console.log(
  //   "itename quantity price userId",
  //   itemName,
  //   quantity,
  //   price,
  //   userId
  // );

  try {
    await connectToDB();

    const userInventory = await InventoryModel.findOne({ userId });
    // console.log(
    //   "var userinventory que tiene esto => InventoryModel.findOne({ userId });",
    //   userInventory
    // );

    if (!userInventory) {
      return new Response("User inventory not found.", { status: 404 });
    }

    const itemInInventory = userInventory.items.find(
      (item) => item.itemIdentifier === itemIdentifier
    );

    if (!itemInInventory || itemInInventory.quantity < quantity) {
      return new Response("Insufficient quantity in the user's inventory.", {
        status: 400,
      });
    }

    // If the user has the item with enough quantity, you can proceed
    // to create a new marketplace transaction
    const newMarketplaceTransaction = new MarketplaceTransaction({
      sellerId: userId,
      itemIdentifier,
      itemName,
      quantity,
      price,
      rarity,
      habitat,
    });
    console.log("newMarketplaceTransaction =>>>", newMarketplaceTransaction);

    if (itemInInventory) {
      itemInInventory.quantity -= quantity;

      // If the quantity becomes zero, remove the item from the inventory
      if (itemInInventory.quantity === 0) {
        userInventory.items = userInventory.items.filter(
          (item) => item.itemIdentifier !== itemIdentifier
        );
      }
    }
    await userInventory.save();

    // Save the new marketplace transaction
    await newMarketplaceTransaction.save();

    // If the item is successfully listed in the marketplace,
    // you can update the user's inventory by reducing the quantity
    // of the item

    // Return a success response
    return new Response("Item listed in the marketplace.", { status: 201 });
  } catch (error) {
    console.error("Error listing item in the marketplace:", error);
    return new Response("Failed to list item in the marketplace.", {
      status: 500,
    });
  }
};
