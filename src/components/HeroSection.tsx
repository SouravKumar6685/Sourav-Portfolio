import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../constants/hero';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Replace with your actual Google Drive resume link
  const resumeLink = "https://drive.google.com/drive/folders/1n-j1ssjxpcoE6I4ZAaLlWxTA_g2TBl52";

  return (
    <section className="relative z-10 py-20 md:py-32 flex items-center px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full max-w-4xl mx-auto text-center md:text-left"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
        >
          {HERO_DATA.name}
        </motion.h1>

        <motion.h2 
          variants={fadeIn}
          className="text-xl md:text-2xl font-medium text-blue-600 mt-3"
        >
          {HERO_DATA.title}
        </motion.h2>

        <motion.p 
          variants={fadeIn}
          className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto md:mx-0 leading-relaxed"
        >
          {HERO_DATA.description}
        </motion.p>

        <motion.div 
          variants={fadeIn}
          className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
        >
          <a
            href={HERO_DATA.cta.primary.link}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            {HERO_DATA.cta.primary.text}
          </a>
          <a
            href={HERO_DATA.cta.secondary.link}
            className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all hover:border-blue-500"
          >
            {HERO_DATA.cta.secondary.text}
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all flex items-center gap-2"
            download
          >
            <FaFileDownload className="text-white" />
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="flex gap-5 mt-10 justify-center md:justify-start"
        >
          {HERO_DATA.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors p-1.5 rounded-full hover:bg-gray-100"
              aria-label={social.name}
            >
              {social.name === 'GitHub' ? (
                <FaGithub className="w-10 h-10" />
              ) : (
                <FaLinkedin className="w-10 h-10" />
              )}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;