import { Schema, model, Document, Model, models, Types } from "mongoose";

export interface MarketplaceTransaction extends Document {
  sellerId: Types.ObjectId;
  // buyerId: Types.ObjectId;
  itemId: string;
  itemName: string;
  quantity: number;
  price: number;
  rarity: string;
  // Add more properties as needed
}

const MarketplaceTransactionSchema = new Schema<MarketplaceTransaction>({
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // buyerId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  itemId: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
  // Add more properties as needed
});

const MarketplaceTransactionModel: Model<MarketplaceTransaction> =
  models.MarketplaceTransaction ||
  model<MarketplaceTransaction>(
    "MarketplaceTransaction",
    MarketplaceTransactionSchema
  );

export default MarketplaceTransactionModel;
