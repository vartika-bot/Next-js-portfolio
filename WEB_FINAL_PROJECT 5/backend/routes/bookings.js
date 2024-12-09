const express = require("express");
const Booking = require("../models/Booking");
const Schedule = require("../models/Schedule");

const router = express.Router();

// Create a new booking and update the schedule
router.post("/", async (req, res) => {
  const { name, date, time, doctor, location } = req.body;

  try {
    // Check if the slot is already booked
    const scheduleSlot = await Schedule.findOne({ doctor, date, time });
    if (!scheduleSlot || scheduleSlot.booked) {
      return res.status(400).json({ error: "Time slot is unavailable" });
    }

    // Create the booking
    const newBooking = new Booking({ name, date, time, doctor, location });
    const savedBooking = await newBooking.save();

    // Update the schedule slot to mark it as booked
    scheduleSlot.booked = true;
    await scheduleSlot.save();

    res.status(201).json({ booking: savedBooking, updatedSchedule: scheduleSlot });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// Fetch all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});
// Payment gateway mock (use a library like Stripe or Razorpay in production)
router.post("/payment", async (req, res) => {
  const { bookingId, amount } = req.body;
  try {
    // Mock payment process
    const paymentStatus = "success"; // Assume success (mock). Replace with real gateway API call.

    if (paymentStatus === "success") {
      // Update the booking to mark as paid
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      booking.paymentStatus = "Paid";
      await booking.save();

      return res.json({ message: "Payment successful", booking });
    } else {
      return res.status(400).json({ error: "Payment failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;