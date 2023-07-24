import { Schema, model, Document, Model, models, Types } from "mongoose";

interface StorageItem {
	itemId: string;
	itemName: string;
	rarity: string;
	quantity: number;
	habitat: string[];
	price: number;
	// Add more properties as needed
}

// interface TreasureBox extends Document {
// 	userId: string;
// 	items: StorageItem[];
// }
interface TreasureBox extends Document {
	userId: Types.ObjectId; // Update the data type to Types.ObjectId
	items: StorageItem[];
}

const TreasureBoxSchema = new Schema<TreasureBox>({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	items: {
		type: [
			{
				itemId: { type: String, required: true },
				itemName: { type: String, required: true },
				rarity: { type: String, required: true },
				quantity: { type: Number, required: true },
				habitat: { type: Array, required: true },
				price: { type: Number, required: true },
				// Add more properties as needed
			},
		],
		default: [],
	},
});

const TreasureBoxModel: Model<TreasureBox> =
	models.TreasureBox || model<TreasureBox>("TreasureBox", TreasureBoxSchema);

export default TreasureBoxModel;
