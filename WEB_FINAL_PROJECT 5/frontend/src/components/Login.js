import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navbar'; // Import the Navigation component
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
      error = 'This field is required.';
    } else {
      switch (name) {
        case 'email':
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            error = 'Please enter a valid email address.';
          }
          break;
        case 'password':
          const passwordComplexity =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
          if (!passwordComplexity.test(value)) {
            error =
              'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.';
          }
          break;
        default:
          break;
      }
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Login failed. Please check your credentials.');
        }

        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);

          // Redirect based on user role
          if (data.user.role === 'patient') {
            const patientId = data.user._id; // Correctly extract patient ID
          localStorage.setItem('patientId', patientId);
          console.log('Patient ID stored:', patientId); 
          const patientName = data.user.name; // Correctly extract patient ID
          localStorage.setItem('patientName', patientName);
          console.log('Patient Name stored:', patientName); 
            navigate('/landing-page'); // Redirect to LandingPage for patients
          } else if (data.user.role === 'doctor') {
            const doctorId = data.user._id; // Correctly extract patient ID
            localStorage.setItem('doctorId', doctorId);
            console.log('D ID stored:', doctorId); 
            const doctorName = data.user.name; // Correctly extract patient ID
            localStorage.setItem('doctorName', doctorName);
            console.log('doctor Name stored:', doctorName); 
              navigate('/landing-page'); // Redirect to LandingPage for patients
            navigate('/doctor-home'); // Redirect to DoctorHome for doctors
          }
          else if (data.user.role === 'admin') {
            navigate('/admin'); // Redirect to DoctorHome for doctors
          }
          console.log('User data:', data.user);
        } else {
          throw new Error(data.message || 'Unexpected response from server.');
        }
      } catch (error) {
        setLoginError(error.message);
        console.error('Login error:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/api/auth/logout', { method: 'POST', credentials: 'include' });
      localStorage.removeItem('authToken');
      localStorage.removeItem('token'); // Correct key name
      alert('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to log out. Please try again.');
    }
  };
  return (
    <>
      {/* Include the Navigation component */}
      <Navigation />

      <div
        style={{
          backgroundImage:
            'url("https://ecisolutions.imgix.net/images/Blog/Blog-WhyBusinessesShouldInvestMoreInEmployeeWellness.jpg?auto=compress%2Cformat&crop=focalpoint&cs=tinysrgb&fit=crop&fp-x=0.5&fp-y=0.5&fp-z=1&h=642&q=90&w=1320&s=0c9d4a960e87af2b9a776cd81ab18a34")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="container mt-5"
          style={{
            backgroundColor: '#E2F1E7',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#243642' }}>
            Login
          </h2>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label" style={{ color: '#243642' }}>
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="loginEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                style={{ maxWidth: '350px', margin: '0 auto' }}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label" style={{ color: '#243642' }}>
                Password
              </label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="loginPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                style={{ maxWidth: '350px', margin: '0 auto' }}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            {loginError && <div className="text-danger mb-3">{loginError}</div>}
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: '#387478',
                borderColor: '#387478',
                color: '#fff',
              }}
              disabled={Object.values(errors).some((error) => error) || loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;