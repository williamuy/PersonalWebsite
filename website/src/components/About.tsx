import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./About.css";

// AboutPage component
const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      <main id="about" className="mx-auto py-8 px-4 max-w-7xl">
        {/* Header section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Get To Know More</p>
          <h1 className="text-5xl text-gray-800 font-bold">About Me</h1>
        </div>
        {/* Cards section */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Experience card */}
          <div className="about-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <FaBriefcase size={50} color="black" />
            <h2 className="text-xl font-semibold mt-4">Experience</h2>
            <p className="text-md">Summer Internship @RSA Conference</p>
            <p className="text-md">Web Developer @24/7 Teach</p>
            <p className="text-md">More Below...</p>
          </div>
          {/* Education card */}
          <div className="about-card bg-white p-6 rounded-xl shadow-xl text-center transform transition duration-500 hover:scale-105">
            <FaGraduationCap size={50} color="black" />
            <h2 className="text-xl font-semibold mt-4">Education</h2>
            <p className="text-md">Business Administration Bachelors</p>
            <p className="text-md">Management Information Systems Minor</p>
          </div>
        </div>
        {/* Description section */}
        <p className="text-gray-600 leading-relaxed mt-8 text-center max-w-2xl mx-auto">
          I'm currently a Senior at the University of Washington, Bothell
          Campus, set to graduate in December 2024. With my passion for both
          innovative software and data science, I'm looking to build a broad
          skillset that will allow me to be a valuable asset to any team.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
