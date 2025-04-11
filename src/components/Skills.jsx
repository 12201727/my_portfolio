// src/components/Skills.jsx
import React from 'react';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'Python'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & Tools',
    skills: ['Node.js', 'Express', 'MongoDB', 'Git'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD'],
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
