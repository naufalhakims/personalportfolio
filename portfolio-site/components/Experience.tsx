'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Customize these with your actual experience and education
  const experiences = [
    {
      type: 'organization',
      title: 'Media & Information Staff',
      organization: 'Himpunan Mahasiswa Teknologi Informasi ITS',
      period: 'March 2025 - Present',
      description:
        'Created design content in the form of posters, banners, and social media posts for HMIT. Collaborated with the team to maintain a consistent visual identity across all platforms.',
      skills: ['Figma'],
    },
    {
      type: 'work',
      title: 'Project Officer of Basic Media Schooling HMIT 2025',
      organization: 'Himpunan Mahasiswa Teknologi Informasi ITS',
      period: 'September 2025',
      description:
        'Led the planning and execution of the Basic Media Schooling event. Coordinated with team members, managed logistics, and ensured the event ran smoothly.',
      skills: ['Project Management'],
    },
    {
      type: 'work',
      title: 'Assistant Lecturer of Database Systems',
      organization: 'Institut Teknologi Sepuluh Nopember',
      period: 'February 2025 - June 2025',
      description:
        'Assisted in teaching Database Systems course for undergraduate students. Conducted lab sessions, graded assignments, and provided support to students in understanding database concepts and SQL.',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      type: 'work',
      title: 'Design and Documentation Staff',
      organization: 'A Renewal Agent 6.0',
      period: 'November 2024 - May 2025',
      description:
        'Created design materials and documentation for the A Renewal Agent 6.0 event. Collaborated with the team to produce visually appealing and informative content.',
      skills: ['Figma'],
    },
    {
      type: 'work',
      title: 'Assistant Lecturer of Law & Ethics in Information Technology',
      organization: 'Institut Teknologi Sepuluh Nopember',
      period: 'September 2024 - December 2024',
      description:
        'Assisted in teaching Law & Ethics in Information Technology course for undergraduate students. Conducted discussions, graded assignments, and provided support to students in understanding legal and ethical issues in IT.',
      skills: ['Research', 'Communication'],
    },
    
    
  ];

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
      period: '2023 - Present',
      description:
        '3rd Year Undergraduate Student',
      achievements: ['GPA: 3.75/4.0'],
    },
    {
      degree: 'High School Diploma',
      institution: 'SMAN 1 Purbalingga',
      period: '2020 - 2023',
      description:
        'Science Major',
      achievements: ['Graduated'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="text-3xl mr-3"></span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>

                  <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-blue-500/20">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 font-medium mb-3">{exp.organization}</p>
                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-900 text-blue-400 text-xs rounded-full border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="text-3xl mr-3"></span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>

                  <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-blue-500/20">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-sm text-blue-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-gray-400 font-medium mb-3">{edu.institution}</p>
                    <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
