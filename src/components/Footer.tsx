import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3748] text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* About Section */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold">About Me</h3>
            <p className="text-gray-300">
              Passionate Cloud Engineer with a knack for building scalable applications. I love exploring new technologies and sharing my knowledge through blogs and tutorials.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                1109souravkumar@example.com
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 7671036645
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SouravKumar6685?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sourav-singh-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/SouravSingh6685"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-300">
            &copy; {currentYear} Made with <FaHeart className="inline text-red-500" /> by Sourav Kumar Singh
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;