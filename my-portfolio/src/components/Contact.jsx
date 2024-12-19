import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mqakeyon", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setMessageSent(true);
          form.reset();
        } else {
          alert("There was an error sending your message. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section id="contact-section" className="bg-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mt-20 mb-12">
          <span className="text-gray-700 text-xl font-semibold">
            How can you communicate?
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Contact Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
          <div className="bg-gray-300 p-8 rounded-lg w-full lg:w-1/2 shadow-lg">
            {messageSent ? (
              <p className="text-gray-700 text-lg text-center">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    cols="30"
                    rows="7"
                    placeholder="Message"
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gray-700 text-gray-200 font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="space-y-6 w-full lg:w-1/2">
 
  <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4 text-gray-800">
      <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 text-2xl" />
      <p>
        <span className="font-semibold">LinkedIn:</span>{" "}
        <a
          href="https://linkedin.com/in/sehrish-tanveer-500283279"
          className="text-gray-700 hover:underline"
        >
          sehrish-tanveer-500283279
        </a>
      </p>
    </div>
  </div>

  <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4 text-gray-800">
      <FontAwesomeIcon icon={faPaperPlane} className="text-gray-700 text-2xl" />
      <p>
        <span className="font-semibold">Email:</span>{" "}
        <a
          href="mailto:sehrishtanveer249@gmail.com"
          className="text-gray-700 hover:underline"
        >
          sehrishtanveer249@gmail.com
        </a>
      </p>
    </div>
  </div>

  <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4 text-gray-800">
      <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-2xl" />
      <p>
        <span className="font-semibold">GitHub:</span>{" "}
        <a
          href="https://github.com/SehrishTanveer2002"
          className="text-gray-700 hover:underline"
        >
          SehrishTanveer2002
        </a>
      </p>
    </div>
  </div>

  

  <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4 text-gray-800">
      <FontAwesomeIcon icon={faInstagram} className="text-gray-700 text-2xl" />
      <p>
        <span className="font-semibold">Instagram:</span>{" "}
        <a
          href="https://instagram.com/sehrish._.tanvir"
          className="text-gray-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          sehrish._.tanvir
        </a>
      </p>
    </div>
  </div>

</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

