import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AdminNav from './path-to/AdminNav';

const DoctorCalendar = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await fetch("/appointments");
      const data = await res.json();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  return <Calendar tileDisabled={({ date }) => appointments.some(a => new Date(a.date).toDateString() === date.toDateString())} />;
};

export default DoctorCalendar;