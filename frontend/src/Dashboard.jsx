import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const actions = [
    {
      title: "Edit Profile",
      description: "Update your personal information",
      icon: "👤",
      action: () => navigate("/edit-profile"),
    },
    {
      title: "See Courses",
      description: "See all courses",
      icon: "📚",
      action: () => navigate("/choose-courses"),
    },
  ];

  return (
    <>
      <style>{`
        .dashboard {
          min-height: 100vh;
          background: linear-gradient(to right, #c6f1f7, #d1c4e9);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
        }

        .logout-btn {
          position: absolute;
          top: 1.5rem;
          right: 2rem;
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          background-color: #f44336;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .logout-btn:hover {
          background-color: #d32f2f;
        }

        .dashboard-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #333;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
        }

        .dashboard-card {
          background: linear-gradient(to bottom right, #ffffff, #f7f9fc);
          padding: 2rem;
          border-radius: 1.2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #00acc1;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: #222;
        }

        .card-desc {
          font-size: 1rem;
          color: #555;
          margin-bottom: 1.2rem;
        }

        .card-button {
          padding: 0.65rem 1.2rem;
          background: linear-gradient(to right, #00acc1, #007c91);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .card-button:hover {
          background: linear-gradient(to right, #007c91, #005f6b);
        }
      `}</style>

      <div className="dashboard">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <div className="card-container">
          {actions.map((item, index) => (
            <div className="dashboard-card" key={index}>
              <div className="card-icon">{item.icon}</div>
              <div className="card-title">{item.title}</div>
              <div className="card-desc">{item.description}</div>
              <button className="card-button" onClick={item.action}>
                Go
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


