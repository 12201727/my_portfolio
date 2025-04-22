// src/components/Education.jsx
import React from 'react';

const educationData = [
  {
    institution: 'Lovely Professional University, Jalandhar, Punjab',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    score: 'CGPA: 6.2',
    year: 'Graduation Year: 2026',
    subtitle: 'Relevant Coursework',
    details: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
    ],
  },
  {
    institution: 'Smastipur college samastipur,Bihar',
    degree: 'Higher Secondary Certificate',
    score: 'Percentage: 72%',
    year: 'Year of Completion: 2019',
    subtitle: 'Key Subjects',
    details: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
  {
    institution: 'D.M.P Holy Mission School, Bihar',
    degree: 'Secondary School Certificate',
    score: 'Percentage: 93%',
    year: 'Year of Completion: 2017',
    subtitle: 'Achievements',
    details: [], // <-- Add this line

  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-white dark:bg-gray-900 p-8 flex items-center justify-center transition-colors duration-300"
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Education
        </h2>

        {educationData.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {edu.institution}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{edu.degree}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">{edu.score}</p>
            <p className="text-gray-600 dark:text-gray-400">{edu.year}</p>
            <p className="text-lg font-semibold mt-2 text-gray-800 dark:text-gray-200">
              {edu.subtitle}:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {edu.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
