const express = require('express');
const User = require('../models/User');
const router = express.Router();
const PatientDoctorMapping = require("../models/DoctorPatientMapping");

const isAdmin = (req, res, next) => {
  
    return next();
  
  
};
router.get('/patients/:patientId', async (req, res) => {
  const { patientId } = req.params;

  try {
    // Find the patient by ID
    const patient = await User.findById(patientId);

    // If the patient is not found
    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({ message: 'Patient not found.' });
    }

    // Return the patient details
    res.status(200).json(patient);
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

router.get('/doctors/:doctorId/patients', async (req, res) => {
  const { doctorId } = req.params;

  try {
    // Fetch all patients assigned to this doctor
    const mappings = await PatientDoctorMapping.find({ doctorId }).populate({
      path: 'patientId', // Assuming patientId references User
      select: 'name email', // Include the required patient details
    });

    if (!mappings.length) {
      return res.status(404).json({ message: 'No patients assigned to this doctor.' });
    }

    // Extract and return patient data
    const patients = mappings.map((mapping) => mapping.patientId);
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients for doctor:', error);
    res.status(500).json({ error: 'Failed to fetch patients.' });
  }
});

router.get('/patients', async (req, res) => {
  try {
    const patients = await User.find({ role: 'patient' }).select('user_id name email role doctor');
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('user_id name email role');
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/', isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('user_id name email role'); 
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.patch("/assign-doctor/:patientId", async (req, res) => {
  const { patientId } = req.params;
  const { doctorId } = req.body;

  try {
    // Find patient and doctor
    const patient = await User.findOne({ _id: patientId, role: "patient" });
    const doctor = await User.findOne({ _id: doctorId, role: "doctor" });

    if (!patient) {
      return res.status(404).json({ error: "Patient not found." });
    }
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }

    // Create or update the patient-doctor mapping
    const existingMapping = await PatientDoctorMapping.findOne({ patientId });
    if (existingMapping) {
      existingMapping.doctorId = doctorId;
      await existingMapping.save();
    } else {
      const newMapping = new PatientDoctorMapping({ patientId, doctorId });
      await newMapping.save();
    }

    // Send the updated patient data to the frontend
    res.status(200).json({ patientId, doctorId });
  } catch (error) {
    console.error("Error assigning doctor:", error);
    res.status(500).json({ error: "Failed to assign doctor." });
  }
});
router.patch("/assign-doctor/:patientId", async (req, res) => {
  const { patientId } = req.params;
  const { doctorId } = req.body;

  try {
    const patient = await User.findOne({ _id: patientId, role: "patient" });
    const doctor = await User.findOne({ _id: doctorId, role: "doctor" });

    if (!patient) {
      return res.status(404).json({ error: "Patient not found." });
    }
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }

    // Create or update the mapping in PatientDoctorMapping collection
    const existingMapping = await PatientDoctorMapping.findOne({ patientId });
    if (existingMapping) {
      existingMapping.doctorId = doctorId;
      await existingMapping.save();
    } else {
      const newMapping = new PatientDoctorMapping({ patientId, doctorId });
      await newMapping.save();
    }

    res.status(200).json({ patientId, doctorId });
  } catch (error) {
    console.error("Error assigning doctor:", error);
    res.status(500).json({ error: "Failed to assign doctor." });
  }
});
module.exports = router;

