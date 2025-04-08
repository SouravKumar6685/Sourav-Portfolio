import * as React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import Notes from "./components/Notes";
import ProjectsGallery from "./components/ProjectsGallery";
import Navigation from "./components/Navigation";
import StatsSection from "./components/StatsSection";
import SkillsSection from "./components/SkillsSection";
import ApproachSection from "./components/ApproachSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import { ChevronUp } from "lucide-react";
import ContactSection from "./components/ContactSection";
import Experience from "./components/Experience";
import Loader from "./components/Loader";

import { STATS_DATA } from "./constants/stats";
import { SKILLS_DATA } from "./constants/skills";
import { APPROACH_DATA } from "./constants/approach";
import { BLOG_DATA } from "./constants/blogs";
import { NOTES_DATA } from "./constants/notes";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [blogStartIndex, setBlogStartIndex] = React.useState(0);
  const appRef = useRef(null);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => setShowScrollToTop(window.scrollY > 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (isLoading) return;

    // Section-based color changes
    const sections = gsap.utils.toArray("section");
    
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          const isContact = section.id === "contact";
          gsap.to("body", {
            backgroundColor: isContact ? "#0f172a" : "#F1F1F1",
            color: isContact ? "#fff" : "#000",
            duration: 0.5
          });
        },
        onEnterBack: () => {
          const isContact = section.id === "contact";
          gsap.to("body", {
            backgroundColor: isContact ? "#0f172a" : "#F1F1F1",
            color: isContact ? "#fff" : "#000",
            duration: 0.5
          });
        }
      });
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoading]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const handleNextBlog = () => {
    if (blogStartIndex + 3 < BLOG_DATA.length) setBlogStartIndex(blogStartIndex + 1);
  };
  const handlePrevBlog = () => {
    if (blogStartIndex > 0) setBlogStartIndex(blogStartIndex - 1);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#F1F1F1] text-black" ref={appRef}>
      <Navigation showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />

      <section id="home" className="pt-24">
        <HeroSection />
      </section>

      <StatsSection stats={STATS_DATA} />
      <SkillsSection skills={SKILLS_DATA} />
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <ServicesGrid />
        </div>
      </section>

      <section id="notes" className="py-20 bg-white">
        <Notes notes={NOTES_DATA} />
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <ProjectsGallery />
        </div>
      </section>

      <Experience />
      
      <ApproachSection approach={APPROACH_DATA} />
      <BlogSection blogs={BLOG_DATA} initialStartIndex={blogStartIndex} />

      <section id="contact" className="py-20 bg-[#0f172a] text-white">
        <ContactSection />
      </section>

      <Footer name="Sourav Kumar Singh" />

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <div className="hidden md:block cursor-dot fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"></div>
    </div>
  );
};

export default App;