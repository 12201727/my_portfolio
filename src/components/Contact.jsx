// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center transition-colors duration-300" // UPDATED
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact</h2> {/* UPDATED */}
        <p className="text-lg text-gray-700 dark:text-gray-300"> {/* UPDATED */}
          Feel free to reach out to me via email at{" "}
          <a href="mailto:rauneet234@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline"> {/* UPDATED */}
            rauneet234@gmail.com
          </a>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300"> {/* UPDATED */}
          Connect with me on{" "}
          <a
            href="https://linkedin.com/in/rauneet-raj"
            className="text-blue-600 dark:text-blue-400 hover:underline" // UPDATED
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300"> {/* UPDATED */}
          Check out my projects on{" "}
          <a
            href="https://github.com/rauneet234"
            className="text-blue-600 dark:text-blue-400 hover:underline" // UPDATED
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">Contact Number: 9508566234</p> {/* UPDATED */}
      </div>
    </section>
  );
};

export default Contact;
