const express = require("express");
const Schedule = require("../models/Schedule");

const router = express.Router();

// Create a new schedule slot
router.post("/", async (req, res) => {
  const { doctor, date, time } = req.body;

  try {
    const newSlot = new Schedule({ doctor, date, time });
    const savedSlot = await newSlot.save();
    res.status(201).json(savedSlot);
  } catch (error) {
    console.error("Error creating schedule slot:", error);
    res.status(500).json({ error: "Failed to create schedule slot" });
  }
});

// Fetch all schedule slots
router.get("/available", async (req, res) => {
  const { doctor, date } = req.query;
  try {
    const availableSlots = await Schedule.find({ doctor, date, booked: false });
    res.json(availableSlots);
  } catch (error) {
    console.error("Error fetching available slots:", error);
    res.status(500).json({ error: "Failed to fetch available slots" });
  }
});
module.exports = router;