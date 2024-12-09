const mongoose = require('mongoose');

const doctorPatientMappingSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming the doctor is a user with the role 'doctor'
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming the patient is a user with the role 'patient'
    required: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

module.exports = mongoose.model('DoctorPatientMapping', doctorPatientMappingSchema);