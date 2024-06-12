const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = "Winning the Cancer Journey";

exports.sendContactEmail = functions.firestore
    .document("contacts/{docId}")
    .onCreate((snap, context) => {
      const contact = snap.data();

      const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: "Drtiffanytroso@winningthecancerjourney.com",
      };

      // Construct the email content with HTML formatting
      mailOptions.subject = `New Contact Message from ${contact.name}`;
      mailOptions.html = `
        <p>You have a new contact message:</p>
        <ul>
          <li><strong>Name:</strong> ${contact.name}</li>
          <li><strong>Email:</strong> ${contact.email}</li>
          <li><strong>Phone:</strong> ${contact.phoneNumber}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
      `;

      return mailTransport
          .sendMail(mailOptions)
          .then(() => {
            console.log("New contact email sent to:", mailOptions.to);
          })
          .catch((error) => {
            console.error("There was an error while sending the email:", error);
          });
    });
