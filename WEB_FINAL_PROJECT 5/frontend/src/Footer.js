import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#243642',
        color: '#E2F1E7',
        padding: '20px 0',
        textAlign: 'center',
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)', // Subtle top shadow
      }}
    >
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: '#629584', fontWeight: 'bold' }}>About Us</h5>
            <p style={{ fontSize: '0.9rem', color: '#E2F1E7' }}>
              We are dedicated to providing mental wellness solutions to help you achieve peace of mind and emotional balance.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: '#629584', fontWeight: 'bold' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" style={{ color: '#E2F1E7', textDecoration: 'none' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/login" style={{ color: '#E2F1E7', textDecoration: 'none' }}>
                  Login
                </a>
              </li>
              <li>
                <a href="/user-creation" style={{ color: '#E2F1E7', textDecoration: 'none' }}>
                  Create Account
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: '#629584', fontWeight: 'bold' }}>Contact</h5>
            <p style={{ fontSize: '0.9rem', color: '#E2F1E7' }}>
              Email: support@mentalwellness.com
              <br />
              Phone: +1 800 123 456
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid #387478',
            marginTop: '15px',
            paddingTop: '10px',
            fontSize: '0.8rem',
          }}
        >
          © 2024 Mental Wellness. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;