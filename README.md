### Project Documentation

🔹 Introduction
This project is a modern web-based platform designed for student onboarding, course recommendations, and peer-pairing using machine learning. Built using the Vite framework, it provides a fast, modular development experience. The application includes user authentication, profile management, interest-based course suggestions, and an intelligent student pairing system powered by K-Means Clustering. The long-term vision includes integrating a personalized AI chatbot for academic support and mentorship.

🔹 Tech Stack
Layer                | Technology
---------------------|-----------------------------------------
Frontend Framework   | Vite + React
Styling              | Tailwind CSS / CSS Modules
Routing              | React Router DOM
State Management     | React Context / useState (or optionally Redux)
Machine Learning     | K-Means Clustering (Python/JavaScript)
Backend (if used)    | Node.js + Express
Database             | MongoDB
Authentication       | Custom Auth API
AI Integration       | Custom LLM-based chatbot (e.g. OpenAI API, Cloudflare Workers AI)

🔹 Features

✅ Authentication Pages  
- **Register Page**: Allows new users to sign up with personal and academic info.  
- **Login Page**: Secure login system for registered users.

✅ Main Menu Page  
Contains navigational links for:  
- **Edit Profile**: Users can update personal details, interests, or preferences.  
- **Get Courses**: Dynamically displays courses based on interest or cluster group.  
- **Add Interest**: Users can tag areas of interest to improve course suggestions and clustering accuracy.

🔹 Student Clustering Logic (K-Means)

🎯 Goal:
To group students based on knowledge scores, interests, or other metrics into clusters for more meaningful interactions.

⚙️ How It Works:
- K-Means Clustering algorithm is used to divide the student population into fixed-size groups (e.g., 25 students per cluster).
- Clustering inputs may include: knowledge_score, selected interests, previous course completions, etc.
- Each student is assigned to a `cluster_id`, saved in the backend.

🤝 Pairing Logic:
- After clustering, students are paired within the same cluster based on complementary strengths (e.g., high scorer paired with a mid-level one).
- This pairing is intended to promote collaborative learning and peer mentoring.

🧠 Future Plans: AI Chatbot Integration
We plan to introduce a personalized AI chatbot that:
- Provides course recommendations  
- Explains difficult topics  
- Suggests learning paths  
- Gives tailored feedback based on progress and interests  

**Possible frameworks:**
- OpenAI GPT-based bot  
- Custom LLM hosted on Cloudflare Workers AI  
- Integration with course data and student clustering for personalization
