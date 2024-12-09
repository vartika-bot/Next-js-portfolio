const express = require('express');
const Appointment = require('../models/Appointment');  
const router = express.Router();

router.post('/', async (req, res) => {
    const { patient_id, doctor_id, date, reason } = req.body;

    if (!patient_id || !doctor_id || !date || !reason) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const appointment = new Appointment({
            patient_id,
            doctor_id,
            date,
            reason
        });

        const savedAppointment = await appointment.save();
        res.status(201).json({
            message: 'Appointment created successfully',
            appointment: savedAppointment
        });
    } catch (err) {
        console.error('Error creating appointment:', err);
        res.status(500).json({ error: 'Error creating appointment' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);  

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(200).json({
            appointment
        });
    } catch (err) {
        console.error('Error fetching appointment:', err);
        res.status(500).json({ error: 'Error fetching appointment' });
    }
});

router.put('/:id', async (req, res) => {
    const { patient_id, doctor_id, date, reason } = req.body;

    if (!patient_id || !doctor_id || !date || !reason) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { patient_id, doctor_id, date, reason },
            { new: true }
        );

        if (!updatedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(200).json({
            message: 'Appointment updated successfully',
            appointment: updatedAppointment
        });
    } catch (err) {
        console.error('Error updating appointment:', err);
        res.status(500).json({ error: 'Error updating appointment' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!deletedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(200).json({
            message: 'Appointment deleted successfully',
            appointment: deletedAppointment
        });
    } catch (err) {
        console.error('Error deleting appointment:', err);
        res.status(500).json({ error: 'Error deleting appointment' });
    }
});

module.exports = router;
