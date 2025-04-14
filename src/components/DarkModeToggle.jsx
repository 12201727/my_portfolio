import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const playSound = () => {
    try {
      const audio = new Audio('/switch.mp3');
      audio.play().catch((err) => console.log('Audio play error:', err));
    } catch (err) {
      console.log('Audio error:', err);
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    playSound();

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-auto flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-md"
    >
      <span
        className={`transition-all duration-500 ease-in-out transform ${
          darkMode ? 'rotate-180 scale-100 text-yellow-400' : 'rotate-0 scale-100 text-gray-800'
        }`}
      >
        {darkMode ? '🌞' : '🌙'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
