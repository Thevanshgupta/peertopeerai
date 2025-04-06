import React, { useEffect, useState } from "react";
import axios from "axios";

const InterestSelector = () => {
  const [interests, setInterests] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch interests from API
  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await axios.get("https://your-api.com/interests");
        setInterests(res.data); // should be an array like ['AI', 'Blockchain', 'Music']
      } catch (err) {
        console.error("Failed to load interests", err);
      }
    };

    fetchInterests();
  }, []);

  const toggleInterest = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("https://your-api.com/user/interests", {
        interests: selected,
      });
      alert("Interests saved!");
    } catch (err) {
      console.error("Submission error", err);
      alert("Failed to save interests.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Choose Your Interests</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${
              selected.includes(interest)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {interest}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Interests"}
      </button>
    </div>
  );
};

export default InterestSelector;

