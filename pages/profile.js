// pages/profile.js
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import profileData from "./profile.json";

const Portfolio = () => {
  const router = useRouter();
  const { name, title, description, skills, projects } = profileData;

  return (
    <div className="flex items-center justify-center bg-white h-full">
      <div className="py-2 w-2/3">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h2 className="text-2xl text-gray-700 mb-4">{title}</h2>
        <p className="mb-4">{description}</p>

        <h3 className="text-xl font-semibold mb-2">Skills:</h3>
        <ul className="border-gray-100 p-2 bg-gray-100 rounded-md shadow-md mt-2 mb-2">
          {skills.map((skill, index) => (
            <li key={index} className="list-disc list-inside">
              {skill}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Projects:</h3>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="mb-4">
              <h4 className="font-bold italic text-blue-600">{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
