import React from 'react';
import './Experience.css'; // Make sure this path is correct
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import RSALogo from './RSAC.jpg'; // Path to your RSA logo image

const experiences = [
  {
    role: 'Technology / Production Intern',
    company: 'RSA Conference',
    companyLogo: RSALogo,
    duration: 'June 2023 - August 2023',
    description: `On the technology team, we worked on building an information system using C#, Blazor UI, DevExpress, and more. This system served as a realtime information hub for all stakeholders involved in the conference processes.

Additionally, on the production team, I created a python script to automate the data entry process of extracting conference information off hard drives.`,
    technologies: ['C#', 'Blazor UI', 'DevExpress', '.NET', 'Python'], // Add this line
  },
  {
    role: 'Open to Opportunities',
    company: 'Currently Seeking New Role',
    icon: (
      <span className="text-gray-500">
        <FaSearch size={32} />
      </span>
    ),
    duration: 'Present',
    description: 'Actively looking for a role that fits my skills in software development and data science. Keen on roles that provide opportunities for growth and learning.',
    technologies: [], // Add this line
  },
  // ... add more experiences as needed
];

const ExperiencePage = () => {
  return (
    <div id="experience" className="bg-gray-100 py-8">
      <main className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Professional Timeline</p>
          <h1 className="text-5xl text-gray-800 font-bold">Experience</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card bg-white p-6 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 relative">
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={`${exp.company} Logo`} className="absolute top-0 right-0 mt-4 mr-4 w-16 h-16 object-contain" />
              ) : (
                <div className="absolute top-0 right-0 mt-4 mr-4 w-16 h-16 flex justify-center items-center">{exp.icon}</div>
              )}
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <h3 className="text-lg text-gray-600">{exp.company}</h3>
              <p className="text-md text-gray-500">{exp.duration}</p>
              {exp.description.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-md mt-4 whitespace-pre-line">{paragraph}</p>
              ))}
              <div className="tech-list mt-4">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;