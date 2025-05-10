'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Building modern, high-performance websites using the latest technologies.',
    icon: 'https://img.icons8.com/fluency/48/code.png',
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile app development for iOS and Android.',
    icon: 'https://img.icons8.com/fluency/48/mobile-app.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric, intuitive and attractive interfaces.',
    icon: 'https://img.icons8.com/fluency/48/design.png',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving visibility and search engine ranking of your websites.',
    icon: 'https://img.icons8.com/fluency/48/seo.png',
  },
  {
    title: 'Automation & Scripts',
    description: 'Creating scripts to automate your tasks and business processes.',
    icon: 'https://img.icons8.com/fluency/48/automation.png',
  },
  {
    title: 'Digital Strategy & Consulting',
    description: 'Helping you define and implement your digital transformation strategy.',
    icon: 'https://img.icons8.com/fluency/48/strategy-board.png',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Services Offered</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Here are the services I provide to my clients</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-800">
                <img src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
