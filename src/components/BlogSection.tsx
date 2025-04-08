import React, { useState } from "react";
import { motion } from "framer-motion";
import { BLOG_DATA } from "../constants/blogs";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  githubLink: string;
}

interface BlogSectionProps {
  blogs?: BlogPost[];
}

const BlogSection = ({ blogs }: BlogSectionProps) => {
  const displayBlogs = blogs || BLOG_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 3;

  // Animation variants
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

  // Calculate visible blogs and navigation limits
  const visibleBlogs = displayBlogs.slice(currentIndex, currentIndex + blogsPerPage);
  const totalPages = Math.ceil(displayBlogs.length / blogsPerPage);
  const currentPage = Math.floor(currentIndex / blogsPerPage) + 1;
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + blogsPerPage >= displayBlogs.length;

  // Navigation handlers
  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex + blogsPerPage <= displayBlogs.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * blogsPerPage);
  };

  return (
    <section className="py-20">
      <div className="container pt-6 pb-4 bg-[#EEE4E2] mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Insights
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        {/* Blogs Grid */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {visibleBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={fadeIn}
                className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                {/* Blog Image - Updated container and image styling */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center absolute inset-0 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                    style={{
                      objectPosition: 'center',
                      willChange: 'transform' // Optimizes animation performance
                    }}
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="text-blue-500 text-sm mb-2">
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  
                  {/* GitHub Link */}
                  <a
                    href={blog.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
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
                isPrevDisabled 
                  ? "bg-gray-300 cursor-not-allowed" 
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`px-4 py-2 rounded-lg ${
                isNextDisabled 
                  ? "bg-gray-300 cursor-not-allowed" 
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors`}
            >
              Next
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index + 1 ? "bg-blue-500" : "bg-gray-300"
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

export default BlogSection;