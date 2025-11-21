import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save a new Contact
router.post("/", async (req, res) => {
    try {
    const { userName, email, message } = req.body;

    if (!userName || !email || !message) {
      return res.status(400).json({ message: "Invalid contact data" });
    }

    const contact = await Contact.create(req.body);

    res.status(201).json({ message: "Contact placed successfully!", contact });
  } catch (err) {
    console.error("Contact creation error:", err);
    res.status(500).json({ message: err.message });
  }
});

// Get a specific Contact 
router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find();

    if (!Contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
