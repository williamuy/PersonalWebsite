import React from 'react';
import './Experience.css'; // Importing the CSS file for styling
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import RSALogo from './Assets/RSAC.jpg'; // Import the RSA logo image

/**
 * Define the experiences to be displayed on the page.
 * Each experience is an object with properties for the role, company, companyLogo, duration, description, and technologies.
 */
const experiences = [
  {
    role: 'Technology / Production Intern',
    company: 'RSA Conference',
    companyLogo: RSALogo,
    duration: 'June 2023 - August 2023',
    description: `On the technology team, we worked on building an information system using C#, Blazor UI, DevExpress, and more. This system served as a realtime information hub for all stakeholders involved in the conference processes.

Additionally, on the production team, I created a python script to automate the data entry process of extracting conference information off hard drives.`,
    technologies: ['C#', 'Blazor UI', 'DevExpress', '.NET', 'Python', 'Git', 'Version Control'], // List of technologies used in this role
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
    technologies: [], // No specific technologies for this role
  },
  // ... add more experiences as needed
];

/**
 * ExperiencePage component for the website.
 * It displays a list of professional experiences.
 * 
 * @returns JSX.Element The ExperiencePage component as a JSX Element.
 */
const ExperiencePage = () => {
  return (
    <div id="experience" className="bg-gray-100 py-8">
      <main className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Professional</p>
          <h1 className="text-5xl text-gray-800 font-bold">Experience</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map over the experiences array and create a card for each experience */}
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card bg-white p-6 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 relative">
              {/* If there's a company logo, display it. Otherwise, display the icon */}
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={`${exp.company} Logo`} className="absolute top-0 right-0 mt-4 mr-4 w-16 h-16 object-contain" />
              ) : (
                <div className="absolute top-0 right-0 mt-4 mr-4 w-16 h-16 flex justify-center items-center">{exp.icon}</div>
              )}
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <h3 className="text-lg text-gray-600">{exp.company}</h3>
              <p className="text-md text-gray-500">{exp.duration}</p>
              {/* Split the description into paragraphs and display each one */}
              {exp.description.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-md mt-4 whitespace-pre-line">{paragraph}</p>
              ))}
              {/* Map over the technologies array and create a tag for each technology */}
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

// Export the ExperiencePage component as the default export
export default ExperiencePage;