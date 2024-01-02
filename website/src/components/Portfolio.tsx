import React from 'react';
import ProjectImage1 from './Assets/ProjectPic1.png'; // Replace with your actual project image paths
import ProjectImage2 from './Assets/ProjectPic2.png'; // Replace with your actual project image paths
import ProjectImage3 from './Assets/ProjectPic3.png'; // Replace with your actual project image paths
import './Portfolio.css';

// Define the data for each project
const projectData = [
  // Project 1
  {
    title: 'Personal Landing Page',
    description: 'Designed a minimalist and contemporary personal landing page prioritizing best practices in web development. This project showcases a commitment to creating highly responsive and user-friendly interfaces that are both functional and aesthetically pleasing',
    image: ProjectImage1,
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'NodeJS', 'Firebase', 'AWS Route 53', 'DALL·E 3', 'And More...'],
    status: 'Completed',
    codeLink: 'https://github.com/williamuy/PersonalWebsite'
  },
  // Project 2
  {
    title: 'Laptop Price Analysis',
    description: 'Developed a web scraper to capture key specifications of laptops from Best Buy. Post-analysis, the project transitioned into a data visualization phase, producing clear, insightful graphics that elucidate laptop market trends and specifications.',
    image: ProjectImage2,
    technologies: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'BeautifulSoup', 'Selenium', 'And More...'],
    status: 'Completed',
    codeLink: 'https://github.com/williamuy/Laptop-Analysis'
  },
  // Project 3
  {
    title: 'Full Stack Study App',
    description: 'Collaborating with a team to develop a modern day study app.',
    image: ProjectImage3,
    technologies: ['TypeScript', 'React', 'Python', 'FastAPI', 'mySQL', 'And More...'],
    status: 'Ongoing',
    codeLink: 'http://github.com/project-three'
  },
];

// Define the Portfolio component
const Portfolio = () => {
  return (
    <div className="bg-gray-100 py-8">
      <main id="projects" className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Showcasing My</p>
          <h1 className="text-5xl text-gray-800 font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the projectData array to create a card for each project */}
          {projectData.map((project, index) => (
            <div key={index} className="project-card bg-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-between h-full">
              <div>
                {/* Display the project image */}
                <img src={project.image} alt={project.title} className="w-full h-auto mb-4 object-cover" />
                {/* Display the project title */}
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {/* Display the project description */}
                <p className="text-md mb-4">{project.description}</p>
                {/* Display the list of technologies used in the project */}
                <ul className="tech-list mb-4">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                {/* Display the project status. If the project is ongoing, display a status badge. Otherwise, display a link to the project code. */}
                {project.status === 'Ongoing' ? (
                  <span className="status-badge">Ongoing</span>
                ) : (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-code">View Code</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Export the Portfolio component as the default export
export default Portfolio;