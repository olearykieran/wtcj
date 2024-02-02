"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function PopupBar() {
  const [showPopup, setShowPopup] = useState(true); // To show or hide the popup bar
  const [showForm, setShowForm] = useState(false); // To show or hide the form modal

  // Function to handle the opening of the form modal
  const handleOpenForm = () => {
    setShowPopup(false); // Hide the popup bar when the form opens
    setShowForm(true); // Show the form modal
  };

  // Function to handle the closing of the form modal
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {showPopup && (
        <div className="bg-pink-500 text-white text-center p-4">
          FREE Guide: "8 Questions to ask your doctor as a new ONCOLOGY PATIENT"
          <button
            className="ml-4 bg-white text-blue-500 px-4 py-2 rounded"
            onClick={handleOpenForm}
          >
            Get It Now
          </button>
        </div>
      )}

      {showForm && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Enter your details
              </h3>
              <button
                onClick={handleCloseForm}
                className="text-gray-400 hover:text-gray-500"
              >
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 px-7 py-3">
              <input
                type="text"
                placeholder="Enter your first name"
                className="mb-4 px-4 py-2 border rounded w-full"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-4 px-4 py-2 border rounded w-full"
              />
            </div>
            <div className="items-center px-4 py-3">
              <button
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleCloseForm}
              >
                Get It Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
