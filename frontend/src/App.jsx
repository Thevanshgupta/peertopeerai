import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import "./App.css";
import Dashboard from "./Dashboard";
import EditProfile from "./EditProfile";
import AddInterest from "./AddInterest";
import ChooseCourses from "./ChooseCourses";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ViewUsers from "./ViewUser";
export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
	  <Route path="/dashboard" element={<Dashboard />} />"
	  <Route path="/edit-profile" element={<EditProfile />} />"
	  <Route path="/add-interest" element={<AddInterest />} />"
	  <Route path="/choose-courses" element={<ChooseCourses/>} />"
	  <Route path="/admin" element={<AdminLogin/>} />"
	  <Route path="/admin-dash" element={<AdminDashboard/>} />"
	  <Route path="/admin/users" element={<ViewUsers/>} />"
        </Routes>
      </div>
    </Router>
  );
}
