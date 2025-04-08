import React from "react";
import { motion } from "framer-motion";
import { APPROACH_DATA } from "../constants/approach";

interface ApproachStep {
  title: string;
  description: string;
}

interface ApproachSectionProps {
  approach?: ApproachStep[];
}

const ApproachSection = ({ approach }: ApproachSectionProps) => {
  const displayApproach = approach || APPROACH_DATA;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 bg-base-100 gap-8">
          {displayApproach.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center p-8 bg-base-100 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="w-16 h-16 oklch(98% 0.016 73.684) rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;