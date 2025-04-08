import React, { useState } from "react";
import { motion } from "framer-motion";
import { NOTES_DATA } from "../constants/notes";

interface Note {
  id: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  tools: string[];
}

interface NotesProps {
  notes?: Note[];
}

const Notes = ({ notes }: NotesProps) => {
  const displayNotes = notes || NOTES_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const notesPerPage = 3; // Changed from 2 to 3

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const visibleNotes = displayNotes.slice(currentIndex, currentIndex + notesPerPage);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex + notesPerPage <= displayNotes.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + notesPerPage >= displayNotes.length;

  return (
    <section className="py-20 bg-[#DEDEDE]" data-scroll-section>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Notes & Resources
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" // Added lg:grid-cols-3
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {visibleNotes.map((note) => (
              <motion.div
                key={note.id}
                variants={fadeIn}
                className="w-full bg-white rounded-lg overflow-hidden border border-gray-300 hover:border-blue-500 transition-all shadow-md hover:shadow-lg group"
              >
                {/* Image Container */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={note.image}
                    alt={note.title}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{note.title}</h3>
                  <p className="text-gray-600 mb-4">{note.description}</p>
                  
                  {/* Tools */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-500 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {note.tools.map((tool) => (
                        <span 
                          key={tool} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={note.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    View on GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`px-4 py-2 rounded-lg ${
                isPrevDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`px-4 py-2 rounded-lg ${
                isNextDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              Next
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(displayNotes.length / notesPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * notesPerPage)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index * notesPerPage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;