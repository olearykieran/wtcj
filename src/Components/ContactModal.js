import React from "react";
import ContactForm from "./ContactForm"; // Corrected import statement

const ContactModal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={closeModal}>X</button>
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
