import React from 'react';
import ProjectImage1 from './ProjectPic1.png'; // Replace with your actual project image paths
import ProjectImage2 from './ProjectPic2.png';
import ProjectImage3 from './ProjectPic3.png';

const projectData = [
  {
    title: 'Personal Landing Page',
    description: 'This is my personal landing page to keep track of my progress. It will be updated with more projects and information as I advance in my career.',
    image: ProjectImage1,
    technologies: ['TypeScript','React', 'Tailwind CSS', 'HTML', 'CSS', 'DALL·E 3' ],
    status: 'Completed',
    codeLink: 'http://github.com/project-one'
  },
  {
    title: 'Project Two',
    description: 'A detailed description of Project Two. This project is focused on frontend technologies and provides a great user experience.',
    image: ProjectImage2,
    technologies: ['Vue.js', 'Tailwind CSS'],
    status: 'Completed',
    demoLink: 'http://example.com/demo2',
    codeLink: 'http://github.com/project-two'
  },
  {
    title: 'Project Three',
    description: 'This is an ongoing project that I am currently working on. It aims to solve problems in the data analysis domain.',
    image: ProjectImage3,
    technologies: ['Python', 'Pandas', 'Jupyter'],
    status: 'Ongoing',
    demoLink: 'http://example.com/demo3',
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
            <div key={index} className="project-card bg-white p-6 rounded-xl shadow-xl">
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
              {project.status === 'Ongoing' && (
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full font-semibold">Ongoing</span>
              )}
              <div className="mt-4">
                {/* Delete the following line */}
                {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo mr-2">View Demo</a> */}
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-code">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;