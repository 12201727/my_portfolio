import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DarkModeToggle from './DarkModeToggle'; // 👈 Add this


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md p-4 flex justify-center space-x-6 z-50 transition-colors duration-300"> {/* UPDATED */}
      {['About', 'Skills', 'Education', 'Certifications', 'Projects', 'Contact'].map((section) => (
        <AnchorLink
          key={section}
          href={`#${section.toLowerCase()}`}
          className="text-blue-600 dark:text-blue-400 font-medium px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 transition" // UPDATED
        >
          {section}
        </AnchorLink>
      ))}
      <a
        href="/resume.pdf"
        download
        className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition" // No change needed
      >
        Download Resume
      </a>
      <DarkModeToggle /> {/* 👈 Add this after Download Resume */}

    </nav>
  );
};

export default Navbar;
