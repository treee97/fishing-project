// dynamic ...nextauth
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import InventoryModel from "@/models/inventory";
import { connectToDB } from "@/utils/database";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
		}),
	],
	callbacks: {
		async session({ session }) {
			// store the user id from MongoDB to session
			const sessionUser = await User.findOne({ email: session.user.email });
			session.user.id = sessionUser._id.toString();

			console.log("Session User ID:", session.user.id);

			return session;
		},
		async signIn({ account, profile, user, credentials }) {
			try {
				await connectToDB();

				// check if user already exists
				const userExists = await User.findOne({ email: profile.email });

				// if not, create a new document and save user in MongoDB
				if (!userExists) {
					// Create a new user
					const newUser = await User.create({
					  email: profile.email,
				//    username: generatedUsername,
					  username: profile.name,

					  image: profile.picture,
					});
		  
					// Create an empty inventory for the user
					const newInventory = await InventoryModel.create({
					  userId: newUser._id,
					  items: [],
					});
		  
					// Update the user's inventoryId with the new inventory's _id
					newUser.inventoryId = newInventory._id;
					await newUser.save();
				  }
		  

				return true;
			} catch (error) {
				console.log(
					"Error (nextauthError) checking if user exists: ",
					error.message
				);
				return false;
			}
		},
	},
});
export { handler as GET, handler as POST };
