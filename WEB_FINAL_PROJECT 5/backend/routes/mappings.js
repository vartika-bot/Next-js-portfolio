const express = require("express");
const PatientDoctorMapping = require("../models/DoctorPatientMapping");
const router = express.Router();
const User = require("../models/User"); // Assuming you have a User model

router.get("/", async (req, res) => {
  try {
    const mappings = await PatientDoctorMapping.find();
    res.status(200).json(mappings);
  } catch (error) {
    console.error("Error fetching mappings:", error);
    res.status(500).json({ error: "Failed to fetch mappings." });
  }
});


// Fetch assigned doctor for a specific patient
router.get("/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;

    // Find the mapping for the patient
    const mapping = await PatientDoctorMapping.findOne({ patientId }).populate("doctorId", "name _id");
    if (!mapping) {
      return res.status(404).json({ error: "No doctor assigned to this patient." });
    }

    // Return doctor details
    res.status(200).json(mapping.doctorId); // Only return doctor information
  } catch (error) {
    console.error("Error fetching doctor mapping:", error);
    res.status(500).json({ error: "Failed to fetch doctor mapping." });
  }
});

module.exports = router;
