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
          alt="Runeet Raj"
          className="w-48 h-48 mx-auto mb-4 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Runeet Raj</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a 3rd-year student at Lovely Professional University, pursuing B.Tech with a specialization in Cloud Computing. Passionate about building scalable cloud-native applications.
        </p>
      </div>
    </section>
  );
};

export default About;
