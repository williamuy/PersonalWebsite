import React from 'react';
import ProjectImage1 from './ProjectPic1.png'; // Replace with your actual project image paths
import ProjectImage2 from './ProjectPic2.png';
import ProjectImage3 from './ProjectPic3.png';

const projectData = [
  {
    title: 'Personal Landing Page',
    description: 'This project is this very website. It will be updated with more projects and information as I advance in my career.',
    image: ProjectImage1,
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'DALL·E 3'],
    status: 'Completed',
    codeLink: 'http://github.com/project-one'
  },
  {
    title: 'Laptop Price Analysis',
    description: 'This project focuses on web scraping, data cleaning, and analysis / visualization on laptop data from Best Buy.',
    image: ProjectImage2,
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'BeautifulSoup', 'Selenium', 'And More...'],
    status: 'Completed',
    codeLink: 'https://github.com/williamuy/Laptop-Analysis'
  },
  {
    title: 'Full Stack Study App',
    description: 'Collaborating with a team to develop a modern day study app.',
    image: ProjectImage3,
    technologies: ['TypeScript', 'React', 'Python', 'FastAPI', 'mySQL', 'And More...'],
    status: 'Ongoing',
    codeLink: 'http://github.com/project-three'
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-100 py-8">
      <main id="projects" className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Showcasing My Work</p>
          <h1 className="text-5xl text-gray-800 font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="project-card bg-white p-6 rounded-xl shadow-xl text-center">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-4 object-cover" />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-md mb-4">{project.description}</p>
              <ul className="tech-list mb-4">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
              {project.status === 'Ongoing' ? (
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full font-semibold">Ongoing</span>
              ) : (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-code">View Code</a>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
