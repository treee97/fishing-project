import { Schema, model, Document, Model, models } from "mongoose";

interface User extends Document {
  email: string;
  username: string;
  image?: string;
}

const UserSchema = new Schema<User>({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/,
      "Username in (modal/user) error - invalid,",
    ],
  },
  image: {
    type: String,
  },
});

const UserModel: Model<User> = models.User || model<User>("User", UserSchema);

export default UserModel;
