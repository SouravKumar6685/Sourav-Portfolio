import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants/services';

const ServicesGrid = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                {/* Replace with your icon component */}
                <span className="text-blue-500 font-bold">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="mt-2 space-y-2 flex-grow">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors self-start">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;