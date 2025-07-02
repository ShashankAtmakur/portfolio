import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Adversarial CAPTCHA Attacks",
      desc: "Built an FGSM-based adversarial attack system using CNN and MobileNet, deployed as a Flask web app.",
      link: "https://github.com/ShashankAtmakur/IAASOIC"
    },
    {
      title: "Smart Pole (IoT Emergency System)",
      desc: "Arduino-based system for women's safety with GPS, GSM, buzzer, and LED alert integration.",
      link: "https://github.com/ShashankAtmakur/Smart-Pole-Safety-System"
    },
    {
      title: "ChatGPT Web UI Clone",
      desc: "Chat-style web page replicating ChatGPT's interface with responsive layout.",
      link: "https://github.com/ShashankAtmakur/ChatGPTWebPage"
    },
    {
      title: "Hospital Management Website",
      desc: "Simple static HTML/CSS website for hospital services and appointment booking.",
      link: "https://github.com/ShashankAtmakur/Hospital-Management-Html"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-black p-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <Button onClick={() => setDarkMode(!darkMode)} variant="ghost">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold">Shashank Atmakur</h1>
          <p className="text-lg mt-2">
            AI Developer | Full Stack Engineer | IoT Innovator
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/ShashankAtmakur" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-primary transition-transform hover:scale-110" />
            </a>
            <a href="https://linkedin.com/in/ShashankAtmakur" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition-transform hover:scale-110" />
            </a>
            <a href="mailto:1338shashank@gmail.com">
              <Mail className="w-6 h-6 hover:text-red-600 transition-transform hover:scale-110" />
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/ShashankAtmakur_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.header>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                <li><strong>Languages:</strong> Java, Python, C++, JavaScript</li>
                <li><strong>Web & Frameworks:</strong> React, Flask, Node.js, Spring Boot, Next.js</li>
                <li><strong>Databases:</strong> MySQL, MongoDB, Firebase</li>
                <li><strong>Tools:</strong> Git, Postman, VS Code, Arduino IDE</li>
                <li><strong>Concepts:</strong> Deep Learning, IoT, Adversarial ML, Cybersecurity</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((proj, i) => (
              <motion.a
                key={i}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="block bg-white dark:bg-gray-800 p-5 shadow-md rounded-xl hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm">{proj.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
          <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Java Programming – Oracle Academy</li>
                <li>Cybersecurity Essentials & Ethical Hacking – Cisco</li>
                <li>JavaScript Essentials – Cisco Network Academy</li>
                <li>Apache Maven – Simplilearn</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Shashank Atmakur. Built with React, Tailwind CSS & Framer Motion.
        </motion.footer>
      </div>
    </div>
  );
}
