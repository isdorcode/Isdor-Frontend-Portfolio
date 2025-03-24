import React from 'react';
import './project.css';
import oney from '../images/3544u.png';
import wite from '../images/coana.png';
import cina from '../images/3.png';
import camp from '../images/Avatar Image32555.png'
import school from '../images/Direction Sign.svg'

// Define projectData in this file since you're already exporting it here
const projectData = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: 'An e-commerce platform aimed at providing a seamless shopping experience. The project showcases modern web development practices, responsive design',
    color: '#078C8C', // Using hex color code
    image: oney,
    featured: false
  },
  {
    id: 2,
    name: "UncommonScratch track",
    description: "UncommonScratch Track, built with React and Tailwind, tracks student progress for Uncommon.org. Backend integration ensures real-time updates, offering a scalable, user-friendly educational progress monitoring solution.",
    color: '#F27B50',
    image: wite,
    featured: true
  },
  {
    id: 3,
    name: "Aryas Cart",
    description: "A React-based e-commerce platform for local businesses, offering a seamless, user-friendly shopping experience with modern design",
    color: '#078C8C',
    image: cina,
    featured: false
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills using React and Tailwind CSS. Highlighting my creative work and professional journey.",
    color: "#255059",
    image: camp
  },
  {
    id: 5,
    name: "Blog Platform",
    description: "A content management system for creating and managing blog posts with React, GraphQL, and a headless CMS. Fully responsive and user-friendly interface.",
    color: "#255059",
    image: school
  }
];

const Project = () => {
  // Filter featured project and other projects
  const topProjects = projectData.slice(0, 3);
  const bottomProjects = projectData.slice(3, 5);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h2>Projects</h2>
          <p>
            All Latest Projects and Blogs
          </p>
        </div>
        
        <div className="projects-section">
          {/* Top row with 3 cards, middle one is featured/larger */}
          <div className="top-projects-grid">
            {topProjects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? 'featured-card' : ''}`}
                style={{
                  background: `${project.color}`,
                  boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1)`
                }}
              >
                <div className="project-content">
                  <div
                    className="project-image-container"
                    style={{ backgroundColor: `${project.color}20` }} // Adding 20% opacity version of the color
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row with 2 cards taking 50% width each */}
          <div className="bottom-projects-grid">
            {bottomProjects.map((project) => (
              <div
                key={project.id}
                className="project-card bottom-card"
                style={{
                  background: `${project.color}`,
                  boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1)`
                }}
              >
                <div className="project-content">
                  <div
                    className="project-image-container"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;