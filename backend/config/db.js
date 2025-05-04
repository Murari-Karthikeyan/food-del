import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://murari:9676385869@cluster0.ouhkrli.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}