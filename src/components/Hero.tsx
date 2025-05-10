'use client'


import React, { useEffect, useRef } from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const texts = [
            "Autodidact Developer",
            "Fullstack Developer",
            "React & Vue.js Specialist",
            "Python & Laravel Enthusiast",
            "UI/UX Explorer",
            "Code Architect",
        ];

        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        let text = '';

        const type = () => {
            const currentText = texts[index];

            if (isDeleting) {
                text = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                text = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (textRef.current) {
                textRef.current.textContent = text;
            }

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentText.length) {
                // Pause at the end of typing
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                // Pause before typing the next word
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        setTimeout(type, 1000);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                        Hi, I'm <span className="text-teal-500">Andrix Ngoyi</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 h-12">
                        I'm a <span ref={textRef} className="text-teal-500 font-medium"></span>
                        <span className="animate-blink text-teal-500">|</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-center">
                        Passionate about crafting performant and elegant solutions that solve real-world problems.
                        I specialize in front-end development with React, Vue.js, and modern tools, while also building efficient backends with Laravel, Node.js, and Python.
                        I thrive on transforming complex ideas into user-friendly interfaces.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors duration-200 flex items-center gap-2"
                        >
                            Contact Me
                            <Mail size={18} />
                        </button>
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200"
                        >
                            View Projects
                        </a>
                    </div>

                    <div className="flex justify-center space-x-6 mb-10">
                        <a
                            href="https://github.com/AndrixNg1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andrix-ngoyi-469662321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:andrixngoyi243@gmail.com"
                            className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a
                        href="#about"
                        className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200"
                        aria-label="Scroll down"
                    >
                        <ArrowDown size={28} />
                    </a>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-teal-300/10 dark:bg-teal-700/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-300/10 dark:bg-indigo-700/5 rounded-full filter blur-3xl"></div>
        </section>
    );
};

export default Hero;