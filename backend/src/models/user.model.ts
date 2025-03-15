import mongoose, { Schema, Document, Model } from 'mongoose';

export type UserType = {
  _id:string,
  email:string,
  password:string,
  firstName:string,
  lastName:string;
}

// Define the interface for the User document
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});


// Create the User model
const User = mongoose.model<UserType>("User", userSchema);

export default User;