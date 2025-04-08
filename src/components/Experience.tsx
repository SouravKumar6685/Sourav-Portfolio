import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA, EDUCATION_DATA, OpenSource_Data } from "../constants/experience";

interface TimelineItem {
  company?: string;
  role?: string;
  degree?: string;
  field?: string;
  period: string;
  description?: string;
}

const Experience = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container pt-6 pb-6 bg-[#045184] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl text-[#ffff] font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Work Experience
            </h3>
            <div className="space-y-8">
              {EXPERIENCE_DATA.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-500 pb-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="text-xl font-bold text-[#ffff] ">{item.company}</h4>
                  <div className="text-blue-400 mb-2">
                    {item.role} | {item.period}
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Education
            </h3>
            <div className="space-y-8">
              {EDUCATION_DATA.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple-500 pb-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <h4 className="text-xl font-bold text-[#fff]">{item.degree}</h4>
                  <div className="text-purple-400 mb-2">
                    {item.field} | {item.period}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {OpenSource_Data.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple-500 pb-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <h4 className="text-xl text-[#ffff] font-bold">{item.role}</h4>
                  <div className="text-purple-400 mb-2">
                    {item.field} | {item.period}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;