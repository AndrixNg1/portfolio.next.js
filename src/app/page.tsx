// app/page.tsx
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function Page() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
