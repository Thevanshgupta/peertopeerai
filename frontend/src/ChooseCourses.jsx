
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChooseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5300/api/v1/course/all"); // Replace with actual API
      setCourses(response.data.message);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="choose-container">
      <h1 className="choose-title">See Your Courses</h1>

      {loading ? (
        <div className="choose-loading">Loading courses...</div>
      ) : (
        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.courseid} className="course-card">
              <h2 className="course-name">{course.name}</h2>

              <div className="activities">
                {course.activites.map((activity, index) => (
                  <div key={index} className="activity-card">
                    <h3 className="activity-title">{activity.title}</h3>
                    <p>
                      <strong>Outcome:</strong> {activity.outcome}
                    </p>
                    <p>
                      <strong>Tools:</strong> {activity.tools.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CSS inside the same file */}
      <style>{`
        .choose-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .choose-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2b6cb0;
          text-align: center;
          margin-bottom: 40px;
        }

        .choose-loading {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .course-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .course-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .course-name {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c5282;
          margin-bottom: 16px;
        }

        .activities {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .activity-card {
          background-color: #f1f5f9;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #ccc;
        }

        .activity-title {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .select-btn {
          margin-top: 20px;
          padding: 10px 16px;
          background-color: #2b6cb0;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.25s ease;
        }

        .select-btn:hover {
          background-color: #2c5282;
        }
      `}</style>
    </div>
  );
};

export default ChooseCourses;


