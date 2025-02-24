import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Wrench,
  Cloud,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `radial-gradient(
      circle at ${mousePosition.x}% ${mousePosition.y}%, 
      rgba(59, 130, 246, 0.20) 0%,
      rgba(37, 99, 235, 0.25) 25%,
      rgba(99, 102, 241, 0.20) 50%,
      rgba(147, 197, 253, 0.15) 75%,
      rgba(240, 253, 250, 0.1) 100%
    )`,
    transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`,
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      skills: ["JavaScript/TypeScript", "Python", "Java", "C", "AVR Assembly", "Rust", "OCaml"],
      gradient: "from-blue-500 to-red-500"
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Express", "Flask", "MongoDB", "Selenium", "Puppeteer", "Pandas", "Electron"],
      gradient: "from-blue-500 to-red-500"
    },
    {
      title: "APIs",
      icon: <Cloud size={24} />,
      skills: ["Google Cloud (Drive, Maps, Vision)", "Azure", "OpenAI", "Twilio", "Twitter"],
      gradient: "from-blue-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="fixed inset-0 transition-all duration-300 ease-out -z-10 scale-110" 
        style={gradientStyle}
      />
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 to-cyan-50" />
      
      <section className="h-screen flex flex-col items-center justify-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">
          {' '}
            <TypeAnimation
              sequence={[
                500, // Waits 0.5 seconds
                'Rohit Sharma',
                1000, // Waits 1 second
              ]}
              wrapper="span"
              cursor={true}
              style={{ display: 'inline-block' }}
            />          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-600">
          {' '}
            <TypeAnimation
              sequence={[
                1500, // Waits 0.5 seconds
                'Software Developer',
                750, // Waits 1 second
                'Software Engineer'
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              deletionSpeed={4}
              style={{ display: 'inline-block' }}
              />
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button
              variant="default"
              className="hover-scale bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              About Me
            </Button>
            <Button
              variant="outline"
              className="hover-scale border-2 border-blue-500/50 hover:bg-blue-50"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8"
        >
          <ArrowDown className="animate-bounce text-blue-500" size={24} />
        </motion.div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 drop-shadow-sm">
            About Me
          </h2>
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 gradient-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  Software Developer & Student
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  I'm a passionate software developer and student at the University of Maryland, 
                  College Park. I love building innovative solutions and learning new technologies.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white rounded-full px-4 py-2">
                  <Code2 size={20} />
                  <span>Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full px-4 py-2">
                  <GraduationCap size={20} />
                  <span>Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 drop-shadow-sm">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-scale backdrop-blur-sm"
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${category.gradient} text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 drop-shadow-sm">
            Featured Projects
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <motion.div
                key={1}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                className="glass-card rounded-xl p-6 hover-scale backdrop-blur-sm border border-white/50"
              >
                <h3 className="text-xl font-semibold mb-2 gradient-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  VisMe
                </h3>
                <p className="text-slate-600 mb-4">
                Full-stack activism hub built at TeenHacks2021 that combines endless news feeds, one-click petitions, debate rooms, and ML-powered fake news detection to help teenagers engage with politics responsibly.
                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  onClick={() => {window.open('https://github.com/rsharmadev/VisMe')}}
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </Button>
              </motion.div>
              <motion.div
                key={2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2 * 0.1 }}
                className="glass-card rounded-xl p-6 hover-scale backdrop-blur-sm border border-white/50"
              >
                <h3 className="text-xl font-semibold mb-2 gradient-text bg-gradient-to-r from-red-600 to-blue-1000">
                  Project SafeSight
                </h3>
                <p className="text-slate-600 mb-4">
                Real-time gun detection system built during BitCamp that uses Azure Machine Learning and OpenCV to analyze surveillance footage, automatically alerting first responders and nearby residents via Twilio when weapons are detected.                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-red-600 to-blue-1000 hover:from-red-700 hover:to-blue-1000"
                  onClick={() => {window.open('https://github.com/matthewnanas/bitcamp2023')}}
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </Button>
              </motion.div>
              <motion.div
                key={1}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 3 * 0.1 }}
                className="glass-card rounded-xl p-6 hover-scale backdrop-blur-sm border border-white/50"
              >
                <h3 className="text-xl font-semibold mb-2 gradient-text bg-gradient-to-r from-red-600 to-blue-1000">
                COVID Toolbox
                </h3>
                <p className="text-slate-600 mb-4">
                Webapp built during MocoHacks2021 that assisted and educated users during COVID-19 through features like an automatic appointment scheduler and visualization tools built with Node.js, Express, and various APIs.                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-red-600 to-blue-1000 hover:from-red-700 hover:to-blue-1000"
                  onClick={() => {window.open('https://github.com/rsharmadev/COVID-Toolbox')}}
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </Button>
              </motion.div>
              <motion.div
                key={1}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 4 * 0.1 }}
                className="glass-card rounded-xl p-6 hover-scale backdrop-blur-sm border border-white/50"
              >
                <h3 className="text-xl font-semibold mb-2 gradient-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  AllSky Camera Analysis System
                </h3>
                <p className="text-slate-600 mb-4">
                Automated image processing pipeline developed for the UMD Info Challenge 2022 that analyzes astronomical FITS data using rapid image segmentation and machine learning to extract metadata and generate comprehensive reports.              </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  onClick={() => {window.open('https://github.com/aryananwar/info22?tab=readme-ov-file')}}
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </Button>
              </motion.div>
              
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 drop-shadow-sm">
            Education
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 backdrop-blur-sm border border-white/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  University of Maryland, College Park
                </h3>
                <p className="text-slate-600">B.S. Computer Science</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 drop-shadow-sm">
            Get in Touch
          </h2>
          <div className="glass-card rounded-xl p-8 backdrop-blur-sm border border-white/50">
            <div className="flex flex-col items-center gap-6">
              <p className="text-center text-slate-600 max-w-lg text-lg">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant="default"
                  className="hover-scale bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  onClick={() => {
                    window.location.href = 'mailto:kprsharma21@gmail.com'
                  }}
                >
                  <Mail className="mr-2" size={20} />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  className="hover-scale border-2 border-blue-500/50 hover:bg-blue-50"
                  onClick={() => {window.open('https://github.com/rsharmadev/')}}
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="hover-scale border-2 border-blue-500/50 hover:bg-blue-50"
                  onClick={() => {window.open('https://www.linkedin.com/in/rsharmadev/')}}
                >
                  <Linkedin className="mr-2" size={20} 
                  />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
