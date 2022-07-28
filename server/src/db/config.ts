import mongoose from "mongoose";


export const connect = async ():Promise<void> => {
  await mongoose.connect("mongodb://localhost:27017/ReviewsManger");

};
