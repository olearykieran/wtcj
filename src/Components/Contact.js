import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Stay Connected</h2>

        <div className="md:flex justify-between items-start gap-10">
          {/* Contact Information */}
          <div className="md:w-1/3 flex flex-col items-center text-center mb-8 lg:mb-0 lg:mt-24">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <strong>Email:</strong> contact@yourdomain.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </li>
              <li>
                <strong>Address:</strong> 1234 Street Name, City, Country
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/3">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  type="text"
                  placeholder="Your Name"
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
                  type="email"
                  placeholder="you@example.com"
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
                  placeholder="Your message..."
                  rows="4"
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
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3 flex flex-col items-center text-center mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 mt-24">Follow Us</h3>
            <ul className="flex gap-6">
              {/* Social Icons */}
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
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
