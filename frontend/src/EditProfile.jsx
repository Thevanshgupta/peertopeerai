import React, { useState } from "react";
import axios from "axios";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    studytime: "",
    studymethod: "",
    groupsize: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
	if (formData.groupsize < 1) {
	  setMessage("Group size must be at least 1.");
	  return;
	}

    try {
      const response = await axios.put(
        "http://localhost:5300/api/v1/user/edit",
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update profile.");
    }
  };

  return (
    <>
      <style>{`
        .edit-wrapper {
          min-height: 100vh;
          background: linear-gradient(to right, #fceabb, #f8b500);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .edit-box {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }

        .edit-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #333;
        }

        .edit-form input {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .edit-form button {
          width: 100%;
          padding: 0.8rem;
          background-color: #f8b500;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .edit-form button:hover {
          background-color: #d99800;
        }

        .message {
          margin-top: 1rem;
          text-align: center;
          font-weight: 500;
          color: green;
        }

        .error {
          color: red;
        }
      `}</style>

      <div className="edit-wrapper">
        <div className="edit-box">
          <h2 className="edit-title">Edit Profile</h2>
          <form className="edit-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="studytime"
              placeholder="Preferred Study Time"
              value={formData.studytime}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="studymethod"
              placeholder="Study Method (e.g., Visual, Auditory)"
              value={formData.studymethod}
              onChange={handleChange}
              required
            />

	<input
	  type="number"
	  name="groupsize"
	  placeholder="Preferred Group Size"
	  value={formData.groupsize}
	  onChange={handleChange}
	  min="1"
	  required
	/>

           <button type="submit">Update Profile</button>
          </form>
          {message && (
            <p className={`message ${message.includes("Failed") ? "error" : ""}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

