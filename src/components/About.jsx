// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center transition-colors duration-300"
    >
      <div className="max-w-4xl text-center">
        {/* Profile Photo */}
        <img
          src="/myimage.jpg"
          alt="MD Osama"
          className="w-48 h-48 mx-auto mb-4 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">MD OSAMA</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi, I’m MD Osama, a B.Tech Computer Science student at Lovely Professional University, specializing in Machine Learning, Artificial Intelligence. I focus on building intelligent and scalable applications and have a solid foundation in developing and deploying ML models. I am committed to continuously improving my skills in emerging technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
