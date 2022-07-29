import mongoose from "mongoose";


export const connect = async ():Promise<void> => {
  await mongoose.connect("mongodb+srv://Reviews:nHoaj7JXjOFMMQYQ@rouven.ngg77.mongodb.net/?retryWrites=true&w=majority");

};
