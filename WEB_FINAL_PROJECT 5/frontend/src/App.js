import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserCreation from './components/UserCreation';
import DoctorHome from './doctor/DoctorHome'; // Import DoctorHome
import LandingPage from './patient/LandingPage'; // Import LandingPage
import Footer from './Footer'; // Footer Component
import DashboardPage from "./patient/DashboardPage";
import MyAppointments from "./patient/MyAppointments";
import MyProfile from "./patient/MyProfile";
import BookingPage from "./patient/BookingPage";
import AdminPanel from "./admin/AdminPanel";
import ManageDoctors from "./admin/ManageDoctors";
import ManagePatients from "./admin/ManagePatients";
import PatientList from "./doctor/PatientList";
import PatientProfile from "./doctor/PatientProfile";
import PatientReviews from "./doctor/PatientReviews";
import AppointmentsList from "./doctor/AppointmentsList";
import UpcomingAppointments from "./doctor/UpcomingAppointments";
import AnalyticsChat from "./doctor/AnalyticsChat";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-creation" element={<UserCreation />} />
        <Route path="/doctor-home" element={<DoctorHome />} /> {/* DoctorHome route */}
        <Route path="/landing-page" element={<LandingPage />} /> {/* LandingPage route */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/manage-doctors" element={<ManageDoctors />} />
        <Route path="/admin/manage-patients" element={<ManagePatients />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<AppointmentsList />} />
      <Route path="/upcoming-appointments" element={<UpcomingAppointments />} />
      <Route path="/patients" element={<PatientList />} />
      <Route path="/patient-profile/:patientId" element={<PatientProfile />} />      
      <Route path="/reviews" element={<PatientReviews />} />
      <Route path="/chat" element={<AnalyticsChat />} />
      <Route path="/analytics" element={<AnalyticsChat />} />
      </Routes>

      {/* Footer - Always Visible */}
      <Footer />
    </Router>
  );
}

export default App;