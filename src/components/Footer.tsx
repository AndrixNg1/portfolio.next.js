'use client'


import React from 'react';
import { ChevronUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white mb-8 transition-transform duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Andrix<span className="text-teal-500">.</span></h2>
            <p className="text-gray-400 text-center max-w-md mx-auto">
              Building beautiful, functional digital experiences that solve real-world problems.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/AndrixNg1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/andrix-ngoyi-469662321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app-"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://x.com/andr6102?t=tN7hHgSgdunLZ8sWksdJkQ&s=09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a 
              href="mailto:andrixngoyi243@gmail.com"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024- {new Date().getFullYear()} Andrix Ngoyi. All rights reserved.</p>
            <p className="mt-1">Designed and built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;