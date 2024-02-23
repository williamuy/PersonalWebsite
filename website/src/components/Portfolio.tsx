import ProjectImage1 from "./Assets/ProjectPic1.png"; // Replace with your actual project image paths
import ProjectImage2 from "./Assets/ProjectPic2.png"; // Replace with your actual project image paths
import ProjectImage3 from "./Assets/ProjectPic3.png"; // Replace with your actual project image paths
import "./Portfolio.css";

// Define the data for each project with an additional demoLink for project 3
const projectData = [
  {
    title: "Personal Landing Page",
    description:
      "Designed a minimalist and contemporary personal landing page prioritizing best practices in web development. This project showcases a commitment to creating highly responsive and user-friendly interfaces that are both functional and aesthetically pleasing.",
    image: ProjectImage1,
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "NodeJS",
      "Firebase",
      "AWS Route 53",
      "DALL·E 3",
      "And More...",
    ],
    status: "Completed",
    codeLink: "https://github.com/williamuy/PersonalWebsite",
  },
  {
    title: "Laptop Price Analysis",
    description:
      "Developed a web scraper to capture key specifications of laptops from Best Buy. Post-analysis, the project transitioned into a data visualization phase, producing clear, insightful graphics that elucidate laptop market trends and specifications.",
    image: ProjectImage2,
    technologies: [
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "BeautifulSoup",
      "Selenium",
      "And More...",
    ],
    status: "Completed",
    codeLink: "https://github.com/williamuy/Laptop-Analysis",
  },
  {
    title: "Data Pipeline Project (Azure)",
    description:
      "Used the Tokyo Olympic dataset from Kaggle to ingest data into Azure and created an interactive dashboard. Within the project, I created a full end to end data pipeline using the Azure workspace. I also utilized PySpark to transform the data, then created SQL queries for catered datasets for visualization / analysis.",
    image: ProjectImage3,
    technologies: [
      "Python",
      "PySpark",
      "SQL",
      "Azure Data Factory",
      "Data Lake Gen 2",
      "Databricks",
      "Synapse Analytics",
      "Power BI",
    ],
    status: "Completed",
    codeLink: "https://github.com/williamuy/TokyoOlympicsDataEngineering",
    demoLink: "https://www.youtube.com/watch?v=uwIzjCdpQ5M",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-100 py-8">
      <main id="projects" className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Showcasing My</p>
          <h1 className="text-5xl text-gray-800 font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-md mb-4">{project.description}</p>
                <ul className="tech-list mb-4 flex justify-center">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo mb-2 inline-block"
                  >
                    View Demo
                  </a>
                )}
                {project.status === "Ongoing" ? (
                  <span className="status-badge">Ongoing</span>
                ) : (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-code"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
