"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Customize these with your actual experience and education
  const experiences = [
    {
      type: "work",
      title: "Data Scientist Intern",
      organization: "Social Economic Acceleration Lab (SEAL)",
      period: "February 2026 - Present",
      description:
        "Contributing in data collection, standardization, cleaning, and analysis for various projects. Making sure data is accurate and actionable. Collaborating with the team to derive insights and support data-driven decision making.",
      skills: ["Python", "Pandas", "Numpy", "Jupyter", "Data Analysis", "Data Visualization", "Big Data"],
    },
    {
      type: "organization",
      title: "Media & Information Staff",
      organization: "Himpunan Mahasiswa Teknologi Informasi ITS",
      period: "March 2025 - Present",
      description:
        "Created design content in the form of posters, banners, and social media posts for HMIT. Collaborated with the team to maintain a consistent visual identity across all platforms.",
      skills: ["Figma"],
    },
    {
      type: "work",
      title: "Project Officer of Basic Media Schooling HMIT 2025",
      organization: "Himpunan Mahasiswa Teknologi Informasi ITS",
      period: "September 2025",
      description:
        "Led the planning and execution of the Basic Media Schooling event. Coordinated with team members, managed logistics, and ensured the event ran smoothly.",
      skills: ["Project Management"],
    },
    {
      type: "work",
      title: "Assistant Lecturer of Database Systems",
      organization: "Institut Teknologi Sepuluh Nopember",
      period: "February 2025 - June 2025",
      description:
        "Assisted in teaching Database Systems course for undergraduate students. Conducted lab sessions, graded assignments, and provided support to students in understanding database concepts and SQL.",
      skills: ["MySQL", "MongoDB"],
    },
    {
      type: "organization",
      title: "Design and Documentation Staff",
      organization: "A Renewal Agent 6.0",
      period: "November 2024 - May 2025",
      description:
        "Created design materials and documentation for the A Renewal Agent 6.0 event. Collaborated with the team to produce visually appealing and informative content.",
      skills: ["Figma"],
    },
    {
      type: "work",
      title: "Assistant Lecturer of Law & Ethics in Information Technology",
      organization: "Institut Teknologi Sepuluh Nopember",
      period: "September 2024 - December 2024",
      description:
        "Assisted in teaching Law & Ethics in Information Technology course for undergraduate students. Conducted discussions, graded assignments, and provided support to students in understanding legal and ethical issues in IT.",
      skills: ["Research", "Communication"],
    },
    {
      type: "organization",
      title: "Social Media Marketing Staff",
      organization: "A Renewal Agent 5.0",
      period: "October 2023 - May 2024",
      description:
        "Managed social media accounts and created marketing content for the A Renewal Agent 5.0 event. Developed strategies to increase engagement and reach a wider audience.",
      skills: ["Branding"],
    },
    
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Institut Teknologi Sepuluh Nopember (ITS)",
      period: "2023 - Present",
      description: "3rd Year Undergraduate Student",
      achievements: ["GPA: 3.75/4.0"],
    },
    {
      degree: "High School Diploma",
      institution: "SMAN 1 Purbalingga",
      period: "2020 - 2023",
      description: "Science Major",
      achievements: ["Graduated"],
    },
  ];

  const workExperiences = experiences.filter((item) => item.type === "work");
  const organizationalExperiences = experiences.filter(
    (item) => item.type === "organization",
  );

  return (
    <section id="experience" className="py-20 bg-neutral-900" ref={ref}>
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Work Experience
          </h3>
          <div className="space-y-5">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.organization}`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="relative pl-7 pb-7 border-l-2 border-blue-500/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-neutral-900"></div>

                <div className="bg-neutral-950/70 rounded-lg p-5 hover:bg-neutral-950 transition-colors border border-blue-500/20">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {exp.title}
                    </h4>
                    <span className="text-xs md:text-sm text-blue-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base font-medium mb-2.5">
                    {exp.organization}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-neutral-900 text-blue-300 text-xs rounded-full border border-blue-500/30"
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

        {/* Organizational Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Organizational & Committee Experience
          </h3>
          <div className="space-y-5">
            {organizationalExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.organization}`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                className="relative pl-7 pb-7 border-l-2 border-blue-500/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-neutral-900"></div>

                <div className="bg-neutral-950/70 rounded-lg p-5 hover:bg-neutral-950 transition-colors border border-blue-500/20">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {exp.title}
                    </h4>
                    <span className="text-xs md:text-sm text-blue-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base font-medium mb-2.5">
                    {exp.organization}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-neutral-900 text-blue-300 text-xs rounded-full border border-blue-500/30"
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.degree}-${edu.institution}`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                className="relative pl-7 pb-7 border-l-2 border-blue-500/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-neutral-900"></div>

                <div className="bg-neutral-950/70 rounded-lg p-5 hover:bg-neutral-950 transition-colors border border-blue-500/20">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs md:text-sm text-blue-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base font-medium mb-2.5">
                    {edu.institution}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
