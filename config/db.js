import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri || uri.includes("YOUR_MONGODB")) {
            console.error(
                "❌ MONGO_URI is not set or still a placeholder. Set a valid MongoDB connection string in .env (starts with mongodb:// or mongodb+srv://)."
            );
            return;
        }

        await mongoose.connect(uri);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ Error connecting MongoDB:", error.message);
        console.error("Stack:", error.stack);
        // Do not exit automatically; leave decision to caller. This allows the server to run for debugging.
    }
};

export default connectDB;
