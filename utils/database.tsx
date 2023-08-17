// GoIc3gL3rsJIrGWB
import mongoose from "mongoose";
import MarketplaceTransactionModel from "@/models/marketplace";

let isConnected = false; //track the connection

// CONNECTION TO THE DATABASE

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
    //we return it so we stop it from running
  }
  const mongodbURI = process.env.MONGODB_URI;
  if (!mongodbURI) {
    console.log("MONGODB_URI var has not been found");
    return;
  }

  try {
    await mongoose.connect(mongodbURI, {
      dbName: "fishdata",
      // useUnifiedTopology: true,
    });
    //the urlparser and typo options arent needed anymore because the're part of the default behaviour or thats what i've been told.
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

// Seeder function
export const seedMarketplace = async (data: any) => {
  if (!isConnected) {
    console.log("Please connect to the database first.");
    return;
  }

  try {
    // Replace the hard-coded transactions with the provided data parameter
    await MarketplaceTransactionModel.insertMany(data);
    console.log("Data inserted into MarketplaceTransactions collection.");
  } catch (error) {
    console.error("Error inserting data into MarketplaceTransactions:", error);
  }
};
