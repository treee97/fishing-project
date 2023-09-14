import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   * this code of block can be found in the next-auth doc - Typescript at the very bottom.
   */
  interface Session {
    user: {
      /** e.g The user's postal address. */
      id: string;
      image: string;
    };
  }
}
