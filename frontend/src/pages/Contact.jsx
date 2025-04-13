import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    contactnumber: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://new-backend-azure.vercel.app/users",
        formData
      );

      setLoading(false);
      alert("User submitted successfully!");
    } catch (error) {
      console.error("Error submitting user:", error);
      alert("Failed to submit user.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white shadow-xl rounded-2xl p-8 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-8">
          Stay connect
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-semibold mb-2">
              Contact Number:
            </label>
            <input
              type="text"
              name="contactnumber"
              value={formData.contactnumber}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-semibold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 resize-none h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 hover:shadow-lg transition-all duration-300"
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
