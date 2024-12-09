const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const doctorRoutes = require("./routes/doctor");
const mappingRoutes = require("./routes/mappings"); // Import the new routes
const userRoutes = require('./routes/user'); // Adjust path if necessary
// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:3001', // Replace with frontend origin
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Added PATCH for the new route
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/mappings", mappingRoutes); // Add the doctor-patient mapping routes
app.use('/api/users', userRoutes);

// Root endpoint for testing
app.get('/', (req, res) => {
    res.send('API is running...');s
});

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/healthcare', {
   
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
      console.error('MongoDB connection error:', err.message);
      process.exit(1);
  });

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An unexpected error occurred.' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});