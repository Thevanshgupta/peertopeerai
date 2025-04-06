import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    // Example validation — replace with actual backend logic
    if (!email || !password) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      console.log("Logging in:", { email, password });
    }
   const response = await axios.post("http://localhost:5300/api/v1/admin/login", {
  email,
  password,
});
   if(response.data.status == true){
     navigate('/admin-dash'); 
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="admin@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>

      {/* Internal CSS */}
      <style>{`
        .admin-login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #e0f7fa, #80deea);
          font-family: Arial, sans-serif;
        }

        .login-card {
          background-color: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login-title {
          font-size: 2rem;
          color: #0077b6;
          text-align: center;
          margin-bottom: 24px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
        }

        .login-form label {
          margin-bottom: 8px;
          font-weight: bold;
          color: #333;
        }

        .login-form input {
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        .login-form input:focus {
          outline: none;
          border-color: #0077b6;
          box-shadow: 0 0 0 2px rgba(0, 119, 182, 0.2);
        }

        .login-form button {
          padding: 12px;
          background-color: #0077b6;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-form button:hover {
          background-color: #005f87;
        }

        .error-message {
          background-color: #ffe5e5;
          color: #c00;
          padding: 10px;
          margin-bottom: 16px;
          border-radius: 8px;
          text-align: center;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;

