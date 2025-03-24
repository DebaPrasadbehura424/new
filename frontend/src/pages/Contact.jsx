import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    contactnumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://new-backend-azure.vercel.app/users",
        formData
      );

      alert("User submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting user:", error);
      alert("Failed to submit user.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center text-black mb-6">
        Create User
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-2">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-2">
            Contact Number:
          </label>
          <input
            type="text"
            name="contactnumber"
            value={formData.contactnumber}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
