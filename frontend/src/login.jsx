import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5300/api/v1/user/login", formData);
      const token  = response.data.message;

      if (token) {
        localStorage.setItem("authToken", token);
        navigate("/dashboard");
      } else {
        alert("Login failed: No token received");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials or server error");
    }
  };

  return (
    <>
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .login-box {
          background-color: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          animation: fadeIn 0.6s ease-in-out;
        }

        .login-title {
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .login-subtext {
          font-size: 1rem;
          text-align: center;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
        }

        .login-form input {
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border 0.3s ease;
        }

        .login-form input:focus {
          outline: none;
          border-color: #0072ff;
          box-shadow: 0 0 0 3px rgba(0, 114, 255, 0.2);
        }

        .login-form button {
          padding: 0.75rem;
          background-color: #0072ff;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-form button:hover {
          background-color: #005edc;
        }

        .register-link {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.95rem;
          color: #444;
        }

        .register-link span {
          color: #0072ff;
          font-weight: 600;
          cursor: pointer;
        }

        .register-link span:hover {
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-box">
          <h2 className="login-title">Welcome Back 👋</h2>
          <p className="login-subtext">Please login to continue</p>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Email address"
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
            <button type="submit">Login</button>
          </form>
          <p className="register-link">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </div>
    </>
  );
}


