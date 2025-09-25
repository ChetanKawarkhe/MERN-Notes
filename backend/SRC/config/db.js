 import mongoose, { mongo } from "mongoose"

export const connnectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY")
  } catch(error){
    console.log("Error connecting MongoDB",error);
    process.exit(1) // exit with failure
  }
}