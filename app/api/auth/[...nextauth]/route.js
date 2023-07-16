// dynamic ...nextauth
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const generateValidUsername = (name) => {
  const username = name.replace(" ", "").toLowerCase();

  const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
  const isValidUsername = usernameRegex.test(username);

  if (!isValidUsername) {
    throw new Error("Invalid username format");
  }

  return username;
};
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

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        const generatedUsername = generateValidUsername(profile.name);

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: generatedUsername,
            image: profile.picture,
          });
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
