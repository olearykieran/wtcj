import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactForm = ({ onSuccessfulSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}: ${value.trim()}`); // Log the name and value of the field being updated
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trim(), // Trim the value before updating the state
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Trim input values to remove any leading/trailing whitespace
    const trimmedData = {
      name: formData.name.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    // Validation check
    console.log("Checking validation...");
    if (!trimmedData.name) {
      console.log("Name is empty");
    }
    if (!trimmedData.phoneNumber) {
      console.log("Phone number is empty");
    }
    if (!trimmedData.email) {
      console.log("Email is empty");
    }
    if (!trimmedData.message) {
      console.log("Message is empty");
    }

    if (
      !trimmedData.name ||
      !trimmedData.phoneNumber ||
      !trimmedData.email ||
      !trimmedData.message
    ) {
      alert("Please fill out all fields before submitting.");
      return; // Prevent form submission if any field is empty
    }

    try {
      await addDoc(collection(db, "contacts"), {
        ...trimmedData,
        timestamp: Timestamp.now(),
      });
      console.log("Document written");
      // Clear form fields
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      if (onSuccessfulSubmit) onSuccessfulSubmit(); // Callback for parent component to react
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* Name input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Your Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-pink-500 hover:bg-two text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
