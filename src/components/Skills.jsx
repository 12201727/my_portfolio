// src/components/Skills.jsx
import React from 'react';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['C++','Java','HTML','python','CSS','DSA'],
  },
  {
    category: 'Frameworks',
    skills: ['HTML & CSS', 'Scikit-learn', 'PyTorch','Tensorflow'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['MYSQL', 'Google Colab'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Multi-Tasking', 'Team player'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-900 p-8 flex items-center justify-center transition-colors duration-300"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Skills</h2>
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-lg shadow text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
