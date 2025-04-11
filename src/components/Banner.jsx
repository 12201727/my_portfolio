// src/components/Banner.jsx
import React from 'react';

const Banner = () => (
  <section id="banner" className="relative w-full h-screen">
    <img
      src="/banner.jpg"
      alt="Banner"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4 animate-fade-in">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-white text-base md:text-lg max-w-2xl animate-fade-in delay-200">
        Explore my work, skills, and projects. Connect with me to collaborate on innovative solutions.
      </p>
    </div>
  </section>
);

export default Banner;
