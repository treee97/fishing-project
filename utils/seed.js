// seed.js

import {connectToDB, seedMarketplace} from "./database";

async function seedDatabase() {
  await connectToDB();
  await seedMarketplace();
}

seedDatabase();
