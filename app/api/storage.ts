// pages/api/storage.ts

import { NextApiRequest, NextApiResponse } from "next";
import TreasureBoxModel, {
	StorageItem,
	TreasureBox,
} from "@/models/storage_container";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// This API route will handle GET and POST requests
	if (req.method === "GET") {
		try {
			// Retrieve the userId from the request headers (assuming you're using authentication)
			const userId = req.headers.userId;

			// Find the storage box data for the user with the given userId
			const storage: TreasureBox | null = await TreasureBoxModel.findOne({
				userId,
			});

			if (!storage) {
				return res.status(404).json({ message: "Storage box not found." });
			}

			return res.status(200).json(storage);
		} catch (error) {
			console.error("Error fetching storage box:", error);
			return res.status(500).json({ message: "Server error." });
		}
	} else if (req.method === "POST") {
		try {
			const { userId, items }: { userId: string; items: StorageItem[] } =
				req.body;

			// Create or update the storage box data for the user with the given userId
			await TreasureBoxModel.findOneAndUpdate(
				{ userId },
				{ userId, items },
				{ upsert: true }
			);

			return res
				.status(200)
				.json({ message: "Storage box updated successfully." });
		} catch (error) {
			console.error("Error updating storage box:", error);
			return res.status(500).json({ message: "Server error." });
		}
	} else {
		// Handle other HTTP methods if needed
		return res.status(405).end(); // Method Not Allowed
	}
}
