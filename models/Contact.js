import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.model("Contact", contactSchema);