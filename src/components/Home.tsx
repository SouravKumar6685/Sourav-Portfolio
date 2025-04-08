import * as React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import ProjectsGallery from "./ProjectsGallery";
import Navigation from "./Navigation";
import StatsSection from "./StatsSection";
import SkillsSection from "./SkillsSection";
import ApproachSection from "./ApproachSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import { ChevronUp } from "lucide-react";
import ContactSection from "./ContactSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const stats = [
    { value: "1+", label: "Years of Experience" },
    { value: "40+", label: "Projects Completed" },
  ];

  const skills = [
    "Python Django",
    "AWS Solution Architecture",
    "Jenkins",
    "CI/CD",
    "ArgoCD",
    "AWS Machine Learning",
  ];

  const approach = [
    {
      title: "Research & Define",
      description: "Understanding client needs and target audience.",
    },
    {
      title: "Design & Develop",
      description: "Creating wireframes, mockups, and final artwork.",
    },
    {
      title: "Deliver & Iterate",
      description: "Polishing designs and supporting with revisions.",
    },
  ];

  const testimonials = [
    {
      text: "Sourav's expertise in AWS architecture transformed our deployment process. Highly recommended!",
      author: "Jane Smith, CTO at TechStart",
    },
    {
      text: "Working with Sourav was a game-changer for our DevOps pipeline. Professional and knowledgeable.",
      author: "Michael Johnson, Lead Developer",
    },
    {
      text: "Exceptional problem-solving skills and attention to detail. Our cloud infrastructure has never been more stable.",
      author: "Sarah Williams, Project Manager",
    },
  ];

  const experience = [
    {
      company: "BIQ Solutions",
      role: "DevOps Engineer",
      period: "2024–Now",
      description:
        "Worked on solution architecture for AWS and building Pipelines in Jenkins.",
    },
    {
      company: "NxtWave",
      role: "Developer",
      period: "2023–2024",
      description: "Worked on Django, Developing Learning blogs.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Artificial Intelligence and Machine Learning",
      period: "2019-2023",
    },
  ];

  const blogs = [
    {
      title: "Optimizing CI/CD Pipelines with Jenkins",
      date: "May 15, 2024",
      excerpt:
        "Learn how to streamline your development workflow with efficient CI/CD practices.",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
    },
    {
      title: "AWS Architecture Best Practices",
      date: "April 22, 2024",
      excerpt:
        "Discover the most effective patterns for cloud infrastructure design.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    },
    {
      title: "Kubernetes vs. Docker Swarm",
      date: "March 10, 2024",
      excerpt: "A detailed comparison of container orchestration platforms.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    },
    {
      title: "Securing Your Cloud Infrastructure",
      date: "February 5, 2024",
      excerpt: "Essential security measures for protecting your AWS resources.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
  ];

  const [blogStartIndex, setBlogStartIndex] = React.useState(0);

  const visibleBlogs = blogs.slice(blogStartIndex, blogStartIndex + 3);

  const handleNextBlog = () => {
    if (blogStartIndex + 3 < blogs.length) {
      setBlogStartIndex(blogStartIndex + 1);
    }
  };

  const handlePrevBlog = () => {
    if (blogStartIndex > 0) {
      setBlogStartIndex(blogStartIndex - 1);
    }
  };

  const isNextDisabled = blogStartIndex + 3 >= blogs.length;
  const isPrevDisabled = blogStartIndex <= 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Hero Section */}
      <section id="home" className="pt-24">
        <HeroSection />
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Services Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <ProjectsGallery />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-500 pb-8"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="text-xl font-bold">{item.company}</h4>
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
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-purple-500 pb-8"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <h4 className="text-xl font-bold">{item.degree}</h4>
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

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Approach Section */}
      <ApproachSection approach={approach} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Blog Section */}
      <BlogSection blogs={blogs} initialStartIndex={blogStartIndex} />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer name="Sourav Kumar Singh" />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Custom Cursor (Optional) */}
      <div className="hidden md:block cursor-dot fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"></div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
