import e from "express";
import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB",mongoose.connection.host);
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
};

export default connectToDB;