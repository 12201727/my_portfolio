// src/components/Certifications.jsx
import React from 'react';

const certifications = [
  {
    title: 'NPTEL Certificate for Cloud Computing',
  },
  {
    title: 'complete interview for GFG',
    body: 'GFG',
    completed: '4th Sem, 2024',
    validTill: '2027',
  },
  {
    title: 'Mastering DSA',
    body: 'UDEMY',
    completed: '4th Sem, 2024',
    validTill: '2027',
  },
  {
    title: 'cybersecurity by udemy',
    body: 'UDEMY',
    completed: '5th Sem, 2024',
    validTill: '2027',
  },
  
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center transition-colors duration-300" // UPDATED
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">Certifications</h2> {/* UPDATED */}
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300"> {/* UPDATED */}
          {certifications.map((cert, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white"> {/* UPDATED */}
                {cert.title}
              </h3>
              {cert.body && <p className="text-gray-700 dark:text-gray-300">Certifying Body: {cert.body}</p>} {/* UPDATED */}
              {cert.completed && <p className="text-gray-700 dark:text-gray-300">Completed: {cert.completed}</p>} {/* UPDATED */}
              {cert.validTill && <p className="text-gray-700 dark:text-gray-300">Valid Till: {cert.validTill}</p>} {/* UPDATED */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
