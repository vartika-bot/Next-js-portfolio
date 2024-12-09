const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming the schema is named 'User'
const DoctorSlot = require("../models/DoctorSlot");
const Booking= require("../models/Booking");

router.post("/:doctorId/bookings", async (req, res) => {
    const { doctorId } = req.params;
    const { patientId, patientName, date, time, location } = req.body;

    try {
        // Validate required fields
        if (!patientId || !patientName || !date || !time || !location) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the slot exists
        const [startTime, endTime] = time.split(" - ");
        const slot = await DoctorSlot.findOne({
            doctorId,
            date,
            startTime,
            endTime,
        });

        if (!slot) {
            return res.status(404).json({ error: "Slot not found" });
        }

        // Check if the slot is already booked
        if (slot.booked) {
            return res.status(400).json({ error: "The selected slot is already booked. Please choose a different slot." });
        }

        // Mark the slot as booked
        slot.booked = true;
        await slot.save();

        // Create a booking record
        const booking = new Booking({
            patientId,
            patientName,
            doctorId,
            slotId: slot._id,
            date,
            time,
            location,
        });
        const savedBooking = await booking.save();

        // Respond with success and booking ID
        res.status(201).json({
            message: "Booking successful",
            bookingId: savedBooking._id,
            booking: savedBooking,
        });
    } catch (error) {
        console.error("Error booking slot:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});
  router.delete("/bookings/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the booking by ID
      const booking = await Booking.findById(id);
  
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
  
      // Mark the associated slot as available again
      const [startTime, endTime] = booking.time.split(" - ");
      await DoctorSlot.updateOne(
        {
          _id: booking.slotId,
          doctorId: booking.doctorId,
          date: booking.date,
          startTime: startTime,
          endTime: endTime,
        },
        { $unset: { booked: "" } }
      );
  
      // Delete the booking
      await Booking.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error("Error deleting booking:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });  
  router.get("/:doctorId/bookings", async (req, res) => {
    const { doctorId } = req.params;
  
    try {
      const bookings = await Booking.find({ doctorId }).sort({ date: 1, time: 1 }); // Sorted by date and time
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      res.status(500).json({ error: "Failed to fetch bookings." });
    }
  });
  
  // Get all bookings for a specific patient
  router.get("/patients/:patientId/bookings", async (req, res) => {
    const { patientId } = req.params;
  
    try {
      const bookings = await Booking.find({ patientId }).sort({ date: 1, time: 1 }); // Sorted by date and time
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      res.status(500).json({ error: "Failed to fetch bookings." });
    }
  });
  
// router.post("/:doctorId/bookings", async (req, res) => {
//     const { doctorId } = req.params;
//     const { name, date, time, location } = req.body;
  
//     try {
//       // Validate required fields
//       if (!name || !date || !time || !location) {
//         return res.status(400).json({ error: "All fields are required" });
//       }
  
//       // Check if the slot exists
//       const [startTime, endTime] = time.split(" - ");
//       const slot = await DoctorSlot.findOne({
//         doctorId,
//         date,
//         startTime,
//         endTime,
//       });
  
//       if (!slot) {
//         return res.status(404).json({ error: "Slot not found" });
//       }
  
//       // Check if the slot is already booked
//       if (slot.booked) {
//         return res.status(400).json({ error: "Slot is already booked" });
//       }
  
//       // Mark the slot as booked
//       slot.booked = true;
//       await slot.save();
  
//       // Respond with success
//       res.status(201).json({
//         message: "Booking successful",
//         slot,
//       });
//     } catch (error) {
//       console.error("Error booking slot:", error.message);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });
// Create slots for a doctor
router.post("/:doctorId/slots",  async (req, res) => {
    const { doctorId } = req.params;
    const { date, startTime, endTime } = req.body;
  
    try {
      // Validate the input
      if (!date || !startTime || !endTime) {
        return res.status(400).json({ error: "Date, startTime, and endTime are required" });
      }
  
      // Check for overlapping slots
      const overlappingSlot = await DoctorSlot.findOne({
        doctorId,
        date,
        $or: [
          { startTime: { $lt: endTime, $gte: startTime } },
          { endTime: { $gt: startTime, $lte: endTime } },
        ],
      });
  
      if (overlappingSlot) {
        return res.status(400).json({ error: "Slot overlaps with an existing one." });
      }
  
      // Create a new slot
      const newSlot = new DoctorSlot({
        doctorId,
        date,
        startTime,
        endTime,
      });
  
      await newSlot.save();
  
      res.status(201).json({ message: "Slot created successfully", slot: newSlot });
    } catch (error) {
      console.error("Error creating slot:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // Get all slots for a doctor
  router.get("/:doctorId/slots", async (req, res) => {
    const { doctorId } = req.params;
  
    try {
      const slots = await DoctorSlot.find({ doctorId });
      res.status(200).json(slots);
    } catch (error) {
      console.error("Error fetching slots:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
router.get('/', async (req, res) => {
  try {
    // Filter users with role 'doctor'
    const doctors = await User.find({ role: 'doctor' });
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors.' });
  }
});

// Route to delete a doctor by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const doctorId = req.params.id;
    await User.findByIdAndDelete(doctorId);
    res.status(200).json({ message: 'Doctor deleted successfully.' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ error: 'Failed to delete doctor.' });
  }
});

module.exports = router;