const mongoose = require("mongoose");

const doctorSlotSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true }, // Format: YYYY-MM-DD
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    booked: { type: Boolean, default: false },
}, { timestamps: true });

// Add a unique index to enforce unique slots for a doctor
doctorSlotSchema.index({ doctorId: 1, date: 1, startTime: 1, endTime: 1 }, { unique: true });

module.exports = mongoose.model("DoctorSlot", doctorSlotSchema);