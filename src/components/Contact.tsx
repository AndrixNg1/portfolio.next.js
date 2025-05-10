'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github, Twitter } from 'lucide-react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('https://api-contact-production.up.railway.app/contact.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error: any) {
      console.error('Erreur:', error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Have a question or want to work together? Drop me a message!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out to me through any of the contact methods below.
              I'm always interested in new projects and opportunities.
            </p>

            <div className="space-y-6 mb-8">
              <InfoItem icon={<Mail size={20} />} label="Email" value="andrixngoyi243@gmail.com" href="mailto:andrixngoyi243@gmail.com" />
              <InfoItem icon={<Phone size={20} />} label="Phone" value="+243 993 251-30" href="tel:+243993525130" />
              <InfoItem icon={<MapPin size={20} />} label="Location" value="DR Congo, Lubumbashi" />
            </div>

            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.linkedin.com/in/andrix-ngoyi-469662321" label="LinkedIn" icon="linkedin" />
              <SocialIcon href="https://github.com/AndrixNg1" label="GitHub" icon="github" />
              <SocialIcon href="https://x.com/andr6102" label="Twitter" icon="twitter" />
            </div>
          </div>

          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
              <InputField name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
            </div>
            <InputField name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            <TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />

            <button type="submit" disabled={isSubmitting} className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-300">
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Composants utilitaires
const InfoItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="flex items-start">
    <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{label}</h4>
      {href ? (
        <a href={href} className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
          {value}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ href, label, icon }: { href: string; label: string; icon: 'linkedin' | 'github' | 'twitter' }) => {
  const icons: Record<string, JSX.Element> = {
    linkedin: <Linkedin className="w-5 h-5" />,
    github: <Github className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />
  };

  return (
    <a
      href={href}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors duration-200"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icons[icon]}
    </a>
  );
};

const InputField = ({ name, value, onChange, placeholder, type = 'text' }: any) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    required
    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
);

const TextArea = ({ name, value, onChange, placeholder }: any) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    rows={6}
    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
  ></textarea>
);
