"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
        timestamp: Timestamp.now(), // This adds the current timestamp
      });
      console.log("Document written");
      setIsSubmitted(true);
      // Clear form fields
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      // Optionally, hide success message after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section className="py-12 bg-gray-200" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Connect With Us</h2>

        <div className="md:flex justify-between items-start gap-10">
          {/* Contact Information */}
          <div className="md:w-1/3 flex flex-col items-center text-center mb-8 lg:mb-0 lg:mt-24">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <strong>Email:</strong> Drtiffanytroso@winningthecancerjourney.com
              </li>
              {/*
              <li className="mb-2">
                <strong>Phone:</strong> (917) 647-1718
              </li>
              */}
              <li>
                <strong>Address:</strong> Long Island, New York
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {/* Form fields */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
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
                  className="bg-pink hover:bg-two text-black shadow-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            {isSubmitted && (
              <div className="text-center text-green-500">
                Your message has been sent successfully!
              </div>
            )}
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3 flex flex-col items-center text-center mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 mt-24">Follow Us</h3>
            <ul className="flex gap-6">
              {/* Social Icons */}
              <li>
                <a
                  href="https://www.facebook.com/groups/winningthecancerjourney/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
                </a>
              </li>
              {/* Commenting out Twitter */}
              {/*
    <li>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
      </a>
    </li>
    */}
              {/* Commenting out Instagram */}
              {/*
    <li>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
      </a>
    </li>
    */}
              <li>
                <a
                  href="https://www.linkedin.com/in/tiffany-troso-sandoval-md-b897a017/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
