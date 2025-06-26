'use client';

import { Key, useEffect, useState } from 'react';
import API from '../lib/api';
import { Code, Layers, Database, Users, BookOpen, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PersonalInfo {
  full_name: string;
  email: string;
  phone: string;
  address: string;
  github: string;
}

export default function Home() {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [summary, setSummary] = useState('');
  const [objective, setObjective] = useState('');
  const [skills, setSkills] = useState<any[]>([]);
  const [internships, setInternships] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [education, setEducation] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [personalRes, summaryRes, objectiveRes, skillsRes, internRes, projRes, eduRes, langRes] = await Promise.all([
        API.get('personal/'),
        API.get('summary/'),
        API.get('objective/'),
        API.get('skills/'),
        API.get('internships/'),
        API.get('projects/'),
        API.get('education/'),
        API.get('languages/')
      ]);

      setPersonal(personalRes.data);
      setSummary(summaryRes.data.summary);
      setObjective(objectiveRes.data.objective);
      setSkills(skillsRes.data);
      setInternships(internRes.data);
      setProjects(projRes.data);
      setEducation(eduRes.data);
      setLanguages(langRes.data);
    }

    fetchData();
  }, []);

  const colorPalette = [
    'bg-blue-50 border-blue-600',
    'bg-green-50 border-green-600',
    'bg-purple-50 border-purple-600',
    'bg-orange-50 border-orange-500',
    'bg-pink-50 border-pink-500',
    'bg-yellow-50 border-yellow-500',
    'bg-cyan-50 border-cyan-600',
    'bg-teal-50 border-teal-600'
  ];

  const getCardStyle = (index: number) => `rounded-lg p-4 border-l-4 shadow-sm hover:shadow-md transition duration-300 ${colorPalette[index % colorPalette.length]}`;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main>
      <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-gray-900">Vishant Bhavsar</div>
          <nav className="hidden md:flex gap-6 text-sm sm:text-base font-medium text-gray-700" aria-label="Primary Navigation">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex items-center gap-4 text-gray-600 text-lg">
            <a href={`tel:${personal?.phone}`} title="Call">📞</a>
            <a href={`mailto:${personal?.email}`} title="Email">✉️</a>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-12 py-10 font-sans">
        <AnimatePresence mode="wait">
          <motion.section id="about" className="text-center mb-12 px-2" aria-labelledby="about-heading" role="region" {...fadeInUp}>
            <h1 id="about-heading" className="text-3xl sm:text-5xl font-bold mb-2">{personal?.full_name}</h1>
            <p className="text-gray-600 text-sm sm:text-base">{personal?.email} | {personal?.phone} | {personal?.address}</p>
            <a href={personal?.github} target="_blank" className="inline-block mt-2 text-blue-600 underline text-sm sm:text-base">
              GitHub
            </a>
          </motion.section>

          <motion.section className="mb-10" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-semibold border-b pb-2 mb-4">Professional Summary</h2>
            <p className="text-base sm:text-lg leading-relaxed">{summary}</p>
          </motion.section>

          <motion.section className="mb-10" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-semibold border-b pb-2 mb-4">Career Objective</h2>
            <p className="text-base sm:text-lg leading-relaxed">{objective}</p>
          </motion.section>

          <motion.section id="skills" className="mb-10" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-center border-b pb-2 mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((s, i) => (
                <div key={i} className={getCardStyle(i)}>
                  <h3 className="text-lg font-semibold mb-2">{s.category}</h3>
                  <ul className="list-disc pl-5">
                    {s.skills.split(',').map((skill: string, index: number) => (
                      <li key={index}>{skill.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="projects" className="mb-10" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-center border-b pb-2 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className={getCardStyle(i)}>
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="mb-2 text-sm text-gray-700">{proj.description}</p>
                  <div className="text-sm space-x-4">
                    {proj.github_link && <a href={proj.github_link} target="_blank" className="text-blue-500 underline">GitHub</a>}
                    {proj.frontend_link && <a href={proj.frontend_link} target="_blank" className="text-blue-500 underline">Frontend</a>}
                    {proj.backend_link && <a href={proj.backend_link} target="_blank" className="text-blue-500 underline">Backend</a>}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="experience" className="mb-10" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-center border-b pb-2 mb-8">Internship Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internships.map((item, i) => (
                <div key={i} className={getCardStyle(i)}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                    <span className="text-sm text-gray-600">{item.company}</span>
                  </div>
                  <p className="text-sm text-gray-700">{item.location} | {item.start_date} – {item.end_date}</p>
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    {item.details.split('•').filter((p: string) => p.trim()).map((point: string, idx: Key | null | undefined) => (
                      <li key={idx}>{point.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="education" className="mb-10" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-center border-b pb-2 mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <div key={i} className={getCardStyle(i)}>
                  <p className="font-semibold text-base sm:text-lg mb-1">{edu.degree}</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">{edu.institution} | {edu.duration}</p>
                  <p className="text-sm text-gray-600">Score: {edu.score}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold border-b pb-1 mb-2">Languages</h3>
              <ul className="list-disc pl-5 text-base">
                {languages.map((lang, i) => (
                  <li key={i}>{lang.name}</li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section id="contact" className="mt-12 text-center" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-semibold border-b pb-2 mb-4">Contact</h2>
            <p>Feel free to reach out for job opportunities or collaboration!</p>
            <p className="text-blue-600">📧 {personal?.email}</p>
            <p className="text-blue-600">📞 {personal?.phone}</p>
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  );
}
