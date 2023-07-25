// pages/api/inventory.ts

import { NextApiRequest, NextApiResponse } from "next";
import InventoryModel, { InventoryItem, Inventory } from "@/models/inventory"; // Update the path to your InventoryModel

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// This API route will handle GET and POST requests
	if (req.method === "GET") {
		try {
			// Retrieve the userId from the request headers (assuming you're using authentication)
			const userId = req.headers.userId;

			// Find the inventory data for the user with the given userId
			const inventory: Inventory | null = await InventoryModel.findOne({
				userId,
			});

			if (!inventory) {
				return res.status(404).json({ message: "Inventory not found." });
			}

			return res.status(200).json(inventory);
		} catch (error) {
			console.error("Error fetching inventory:", error);
			return res.status(500).json({ message: "Server error." });
		}
	} else if (req.method === "POST") {
		try {
			const { userId, items }: { userId: string; items: InventoryItem[] } =
				req.body;

			// Create or update the inventory data for the user with the given userId
			await InventoryModel.findOneAndUpdate(
				{ userId },
				{ userId, items },
				{ upsert: true }
			);

			return res
				.status(200)
				.json({ message: "Inventory updated successfully." });
		} catch (error) {
			console.error("Error updating inventory:", error);
			return res.status(500).json({ message: "Server error." });
		}
	} else {
		// Handle other HTTP methods if needed
		return res.status(405).end(); // Method Not Allowed
	}
}
