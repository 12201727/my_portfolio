// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Serverless Web Application',
    description:
      'Developed a serverless web application on AWS using S3, API Gateway, Lambda, and DynamoDB for efficient data storage and request processing.',
  },
  {
    title: 'AI Content Verifier dApp',
    description:
      'Created a decentralized application that hashes and stores AI-generated content on the blockchain to verify its integrity, integrating Azure Cosmos DB for efficient metadata storage.',
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
