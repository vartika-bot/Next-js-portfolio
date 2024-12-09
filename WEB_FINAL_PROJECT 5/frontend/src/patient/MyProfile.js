import React, { useState } from "react";
import PatientNavBar from "./PatientNavBar";
const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, State",
  });
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Credit Card", details: "**** **** **** 1234" },
    { id: 2, type: "PayPal", details: "john.doe@example.com" },
  ]);
  const [newPaymentMethod, setNewPaymentMethod] = useState({ type: "", details: "" });

  const [editMode, setEditMode] = useState(false);
  const [editPaymentMode, setEditPaymentMode] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    alert("Profile updated!");
  };

  const handleAddPaymentMethod = () => {
    if (newPaymentMethod.type && newPaymentMethod.details) {
      setPaymentMethods([...paymentMethods, { id: Date.now(), ...newPaymentMethod }]);
      setNewPaymentMethod({ type: "", details: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeletePaymentMethod = (id) => {
    if (window.confirm("Are you sure you want to delete this payment method?")) {
      setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    }
  };

  return (
    <>
      <PatientNavBar />
    <div
      style={{
        backgroundColor: "#E2F1E7",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "900px",
          backgroundColor: "#387478",
          color: "#E2F1E7",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: "#E2F1E7" }}>
          My Account
        </h2>

        {/* Profile Section */}
        <div
          className="mb-5"
          style={{
            backgroundColor: "#629584",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h4 className="mb-3">Profile Details</h4>
          {editMode ? (
            <>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-light me-2" onClick={handleSaveProfile}>
                Save
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {profile.name}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Phone:</strong> {profile.phone}
              </p>
              <p>
                <strong>Address:</strong> {profile.address}
              </p>
              <button
                className="btn btn-outline-light"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>

        {/* Payment Methods Section */}
        <div
          className="mb-5"
          style={{
            backgroundColor: "#629584",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h4 className="mb-3">My Payment Methods</h4>
          <ul className="list-group mb-3">
            {paymentMethods.map((method) => (
              <li
                key={method.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "#243642",
                  color: "#E2F1E7",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <strong>{method.type}:</strong> {method.details}
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeletePaymentMethod(method.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {editPaymentMode ? (
            <>
              <div className="mb-3">
                <label className="form-label">Payment Type</label>
                <input
                  type="text"
                  name="type"
                  value={newPaymentMethod.type}
                  className="form-control"
                  onChange={(e) =>
                    setNewPaymentMethod({
                      ...newPaymentMethod,
                      type: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Details</label>
                <input
                  type="text"
                  name="details"
                  value={newPaymentMethod.details}
                  className="form-control"
                  onChange={(e) =>
                    setNewPaymentMethod({
                      ...newPaymentMethod,
                      details: e.target.value,
                    })
                  }
                />
              </div>
              <button
                className="btn btn-light me-2"
                onClick={handleAddPaymentMethod}
              >
                Save Payment Method
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => setEditPaymentMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-light"
              onClick={() => setEditPaymentMode(true)}
            >
              Add Payment Method
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default MyProfile;
