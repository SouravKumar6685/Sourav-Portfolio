import React from "react";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  skills?: string[];
}

const skillLogos: { [key: string]: string } = {
  "Python": "https://imgs.search.brave.com/QlI3VhMNt8Zz9vPnBVV5FeBBvMC6Af5jOgRFEfz3_jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTAvUHl0aG9u/X2xvZ29faWNvbi03/MDB4Njk3LnBuZw" ,
  "Python Django": "https://imgs.search.brave.com/a1dTTkz2JEkDOym6OjuyTHXOQ608obW5xWr5pOSR7xc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0RqYW5nby1Mb2dv/LTUwMHgzMTMucG5n",
  "AWS Solution Architecture": "https://imgs.search.brave.com/fwuNjmRE9gMM5ShSY5HEMsHUp6hUwguQVlQdIY3ol3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvQW1hem9uLVdl/Yi1TZXJ2aWNlcy1B/V1MtTG9nby03MDB4/Mzk0LnBuZw",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "CI/CD": "https://imgs.search.brave.com/dKi3-q9uemHgfS1g5kVVxUWT0JS8sresjKIuy-Au3Mg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFibC5jb20vaHMt/ZnMvaHViZnMvQ0lD/REJsb2cucG5nP3dp/ZHRoPTUzNiZuYW1l/PUNJQ0RCbG9nLnBu/Zw", // Example generic CI/CD icon
  "ArgoCD": "https://imgs.search.brave.com/Cjnc40Yt8xuWt2qg2J-VR4DXsLl1bFOY8BaWjekp5zU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3BzbXguY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA3/L0FyZ28tMS1lMTYz/MDMyNzMwNTYzNS0x/LnBuZw",
  "AWS Machine Learning": "https://imgs.search.brave.com/twAnaRZ8bMZpmwC8QPtBni_X2DBXl7d5UN5mVUFUXeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9SZWRpcy9S/ZWRpcy1Mb2dvLndp/bmUuc3Zn",
  "Nginx":"https://imgs.search.brave.com/0B8UUU_5D5VBEOsIB30_XPpKPP_zT7zD55Csb--DV2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2hhaW5ndWFy/ZC5kZXYvbG9nb3Mv/bmdpbnguc3Zn",
  "Docker": "https://imgs.search.brave.com/G8i_afQAUJrPfFD6fKm5AQSmWNRN76ZRTPkR_V8uujo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/OTdfRG9ja2VyX2xv/Z29fbG9nb3MtNTEy/LnBuZw",
  "Kubernetes":"https://imgs.search.brave.com/33-_m2XD3t_vgSbEanZ5Oy-NJcvsOgF1sHArNlLXdlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MGE0NGNlZjEw/MTRjMGI1ZTQ5MTcu/cG5n",
  "prometheus": "https://imgs.search.brave.com/RgwcDsmlZZfLYElRuEltNZ12IwtXuQ7OXmEhQHXjo3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L1Byb21ldGhl/dXNfc29mdHdhcmVf/bG9nby5zdmc",
  "Grafana":"https://imgs.search.brave.com/15ABvn1LVdPd5cBXcNyDL1U0z7mXqUonDItZiPFSZH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDUxLzMz/Ni8zODAvbm9uXzJ4/L2dyYWZhbmEtdHJh/bnNwYXJlbnQtbG9n/by1mcmVlLXBuZy5w/bmc",
  "Terraform":"https://imgs.search.brave.com/-cA-vW9Nbp6YnFLl6fpiSrFZzi6P0aBuO3z7plyyDdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Jl/bmMtdWsvaWNvbi1j/b2xsZWN0aW9uL21h/c3Rlci9henVyZS1k/b2NzL2xvZ29fdGVy/cmFmb3JtLnN2Zw",
  
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const defaultSkills = [
    "Python",
    "Python Django",
    "AWS Solution Architecture",
    "Jenkins",
    "CI/CD",
    "ArgoCD",
    "AWS Machine Learning",
    "Nginx",
  ];

  const displaySkills = skills || defaultSkills;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-6"
        >
          {displaySkills.map((skill, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-800 rounded-full border border-blue-500/30 hover:border-blue-500 transition-colors flex items-center justify-center p-3 shadow-md"
              title={skill}
            >
              <img
                src={skillLogos[skill]}
                alt={skill}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
