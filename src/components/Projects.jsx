// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Text Summarization',
    description:
      'Develop an ML-based text summarization model integrating PCA, RNNs, and transformer models for enhanced summarization accuracy by analysing real-time updates.  development. Implemented OpenNMT/Fairseq frameworks to enhance translation accuracy. Improved recommendation accuracy, delivering more relevant news to users.',
  },
  {
    title: 'Exploring Neural Machine Translation',
    description:
      'This project delves into the field of Neural Machine Translation (NMT) — an advanced deep learning technique used for translating text from one language to another. Unlike traditional rule-based or phrase-based translation systems, NMT models learn to directly map input sequences (sentences) to output sequences using neural networks, significantly improving translation quality and fluency.',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 p-8 flex items-center justify-center transition-colors duration-300" // UPDATED
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2> {/* UPDATED */}
        <p className="text-lg text-gray-700 dark:text-gray-300"> {/* UPDATED */}
          Here are some of the projects I've worked on recently.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition" // UPDATED
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400"> {/* UPDATED */}
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300"> {/* UPDATED */}
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
