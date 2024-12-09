import React, { useState } from 'react';
import Navigation from './Navbar'; // Import the Navigation component
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function UserCreation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    role: 'patient', // Default role selection
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
      error = 'This field is required.';
    } else {
      switch (name) {
        case 'firstName':
        case 'lastName':
          if (!/^[a-zA-Z0-9]+$/.test(value)) {
            error = 'Only alphanumeric characters are allowed.';
          } else if (value.length < 2 || value.length > 50) {
            error = 'Must be between 2 and 50 characters.';
          }
          break;
        case 'age':
          if (isNaN(value) || value <= 0) {
            error = 'Age must be a positive number.';
          }
          break;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(formData).every((value) => value);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!isFormValid) {
        return;
      }
    
      try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          }),
        });
    
        const responseData = await response.json();
    
        if (!response.ok) {
          console.error('Error response:', responseData);
          throw new Error(responseData.message || 'Registration failed.');
        }
    
        alert('Account created successfully!');
        navigate('/login');
        console.log('User data:', responseData.user);
      } catch (error) {
        console.error('Registration error:', error);
        alert(error.message);
      }
    };
  return (
 
    <>
      <Navigation /> {/* Add the Navigation component */}
      <div
        style={{
          backgroundImage:
            'url("https://th.bing.com/th/id/R.69c42596b78f0f166223752142cc5ac6?rik=pHCCIogZV%2bxM4A&riu=http%3a%2f%2fwww.highfocuscenters.com%2fwp-content%2fuploads%2fafrican-female-psychologist-making-notes-and-talking-to-group-of-difficult-teenagers-during-therapy-session-stockpack-gettyimages-scaled.webp&ehk=9OBRUc2bmYiPK9dYGbCMXPylqhOSWUqQ3kqNDapImJk%3d&risl=&pid=ImgRaw&r=0")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Create Account Form */}
        <div
          className="container mt-5"
          style={{
            backgroundColor: '#E2F1E7',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '500px',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#243642' }}>
            Create Account
          </h2>
          <form
            onSubmit={handleSubmit}
            id="createAccountForm"
            className="p-4 shadow rounded"
            style={{ backgroundColor: '#ffffff' }}
          >
            {['firstName', 'lastName', 'age', 'email', 'password'].map((field) => (
              <div className="mb-3" key={field}>
                <label
                  htmlFor={field}
                  className="form-label"
                  style={{ color: '#243642' }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type={
                    field === 'password'
                      ? 'password'
                      : field === 'age'
                      ? 'number'
                      : 'text'
                  }
                  className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderColor: '#629584',
                  }}
                />
                {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
              </div>
            ))}

            <div className="mb-3">
              <label className="form-label" style={{ color: '#243642' }}>
                Role
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="patient"
                  name="role"
                  value="patient"
                  checked={formData.role === 'patient'}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="patient" style={{ color: '#243642' }}>
                  Patient
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="doctor"
                  name="role"
                  value="doctor"
                  checked={formData.role === 'doctor'}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="doctor" style={{ color: '#243642' }}>
                  Doctor
                </label>
              </div>
           
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: '#387478',
                borderColor: '#387478',
                color: '#E2F1E7',
              }}
              disabled={!isFormValid}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserCreation;