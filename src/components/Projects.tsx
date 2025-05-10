'use client'


import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Challenge club scientifique Math-Info",
    description: "A web application designed for a scientific club, featuring a user-friendly interface for managing events, member registrations, and resources related to mathematics and computer science.",
    image: "Math-Info.png",
    tags: ["TailwindCSS", "HTML5 & CSS3"],
    liveUrl: "https://cercle-scientifique.netlify.app/",
    githubUrl: "https://github.com/AndrixNg1/cercle-scientifique-.git",
  },
  {
    id: 2,
    title: "Elpro Pronostic",
    description: "A modern web platform designed for Elpro, a company specializing in sports betting predictions and data analysis. The application emphasizes user experience, performance, and insightful data visualization to support decision-making.",
    image: "Capture d’écran du 2025-05-09 18-30-50.png",
    tags: ["JavaScript","Vue.js", "TailwindCSS", "HTML5 & CSS3","PHP","Blade", "Laravel", "PostgreSQL"],
    liveUrl: "https://elpro-five.vercel.app/",
    githubUrl: "https://github.com/AndrixNg1/elpro.git"
  },  
  {
    id: 3,
    title: "Norservice Showcase Website",
    description: "A responsive and SEO-friendly showcase website for Norservice, a Kinshasa-based company specializing in furniture and podium rentals for events and celebrations. The platform highlights their services, past projects, and contact details, offering clear and elegant exposure of their offerings.",
    image: "Capture d’écran du 2025-05-09 18-51-47.png",
    tags: ["TypeScript", "React", "Tailwind CSS", "tsx", "Vite", "Next.js"],
    liveUrl: "https://www.servicesnor.com/",
    githubUrl: "https://github.com/AndrixNg1/norservice.git"
  },  
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website built for a photographer showcasing their work with a minimalist design, smooth transitions, and responsive image galleries.",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-200"
                      aria-label="View live site"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium transition-colors duration-200"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AndrixNg1?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200"
          >
            View More Projects
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover object-center"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors duration-200 text-center flex items-center justify-center"
                  >
                    View Live Demo
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200 text-center flex items-center justify-center"
                  >
                    View Source Code
                    <Github size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;