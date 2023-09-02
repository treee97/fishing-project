import { connectToDB } from "@/utils/database";
import { getSession } from "next-auth/react"; // Import getSession for user authentication
import InventoryModel from "@/models/inventory";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      // Get the user's session
      const session = await getSession({ req });

      if (!session) {
        // If the user is not authenticated, return an error
        return res
          .status(401)
          .json({ error: "You must be logged in to view your inventory" });
      }

      await connectToDB();

      // Fetch the user's inventory using their ID
      const userId = session.user?.id;
      const inventoryData = await InventoryModel.find({ userId });

      return res.status(200).json(inventoryData);
    } catch (error) {
      console.error("Error fetching inventory data:", error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
