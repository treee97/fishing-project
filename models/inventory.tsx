import { Schema, model, Document, Model, models, Types } from "mongoose";
export interface InventoryItem {
  itemIdentifier: string;
  itemName: string;
  rarity: string;
  quantity: number;
  habitat: string[];
  price: number;
  // Add more properties as needed
}

export interface Inventory extends Document {
  userId: Types.ObjectId;
  items: InventoryItem[];
}

const InventorySchema = new Schema<Inventory>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: {
    type: [
      {
        itemIdentifier: { type: String, required: true },
        itemName: { type: String, required: true },
        rarity: { type: String, required: true },
        quantity: { type: Number, required: true },
        habitat: { type: [String], required: true },
        price: { type: Number, required: true },
        // Add more properties as needed
      },
    ],
    default: [],
  },
});

const InventoryModel: Model<Inventory> =
  models.Inventory || model<Inventory>("Inventory", InventorySchema);

export default InventoryModel;
