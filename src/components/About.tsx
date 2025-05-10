'use client'

import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Get to know me better
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Passionate about building intuitive and impactful digital solutions
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Hello! I'm Andrix Ngoyi, a software developer with a strong focus on design and user experience.
                            Over the past few years, I’ve honed my skills in building clean, efficient, and visually compelling web applications.
                            I thrive on transforming complex ideas into elegant, easy-to-use digital products.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            My journey into tech began during college, where I discovered a deep passion for coding.
                            Since then, I’ve worked on diverse projects that strengthened my skills and taught me the value of clean code, scalability, and thoughtful architecture.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Experience</h4>
                                    <p className="text-gray-600 dark:text-gray-400">2+ years in web development</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Based in Lubumbashi, DR Congo — open to remote opportunities</p>
                                </div>
                            </div>


                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Computer Science student</p>
                                </div>
                            </div>


                            <div className="flex items-start">
                                <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mr-4">
                                    <BookOpen size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Languages</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Fluent in English & French</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors duration-200 text-center"
                            >
                                Hire Me
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200 text-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20"></div>
                            <img
                                src="and1.jpg"
                                alt="Andrix Ngoyi"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-teal-500 dark:bg-teal-600 rounded-full"></div>
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-500 dark:bg-indigo-600 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
