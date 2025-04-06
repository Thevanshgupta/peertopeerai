import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5300/api/v1/user/register", formData);
      console.log(response);
      setSuccess("Registration successful! You can now log in.");
    } catch {
      setError("Failed to register. Try again.");
    }
  };

  return (
    <>
      <style>{`
        .register-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #667eea, #764ba2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .register-box {
          background-color: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 0 30px rgba(0,0,0,0.2);
          width: 100%;
          max-width: 400px;
        }

        .register-header {
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .register-subtext {
          text-align: center;
          font-size: 1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
        }

        .register-form input {
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .register-form input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }

        .register-form button {
          padding: 0.75rem;
          background-color: #667eea;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .register-form button:hover {
          background-color: #5a67d8;
        }

        .error-message {
          background-color: #ffe5e5;
          color: #e53e3e;
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .success-message {
          background-color: #e6fffa;
          color: #38a169;
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .login-link {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.95rem;
          color: #444;
        }

        .login-link span {
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
        }

        .login-link span:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="register-wrapper">
        <div className="register-box">
          <h2 className="register-header">Create an Account</h2>
          <p className="register-subtext">Join us and find your study group!</p>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>

          <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
}


