import React from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
      {value}
    </div>
    <div className="text-gray-400">{label}</div>
  </div>
);

interface StatsSectionProps {
  stats?: StatItemProps[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const defaultStats = [
    { value: "1+", label: "Years of AWS Experience" },
    { value: "40+", label: "Projects Completed" },
  ];

  const displayStats = stats || defaultStats;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-19 "
    >
      <div className="container mx-auto px-6 pt-[10] pb-[10]">
        <div className="flex flex-wrap justify-center gap-12">
          {displayStats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
