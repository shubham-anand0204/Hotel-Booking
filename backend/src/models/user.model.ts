import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs'

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



//This is the hook for mongoose which runs before the document is saved to the database.
userSchema.pre("save", async function (next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,8)
  }
  next();
})


// Create the User model
const User = mongoose.model<UserType>("User", userSchema);

export default User;