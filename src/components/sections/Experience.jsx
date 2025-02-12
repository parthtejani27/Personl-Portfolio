import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "3Embed Software Technologies Pvt. Ltd.",
      location: "Surat, India",
      duration: "06/2021 – 08/2022",
      achievements: [
        "Architected and developed scalable web applications using React (Redux, Context API) and Angular, implementing responsive designs and reusable component libraries that improved application performance by 40%, reduced frontend response time by 25%, and decreased development time by 35%.",
        "Designed and optimized MongoDB database schemas and queries, implementing indexing strategies that reduced query execution time by 35% and improved overall application responsiveness.",
        "Established CI/CD pipelines using Docker, reducing deployment time by 70% and maintaining 99.9% uptime for production applications.",
        "Demonstrated exceptional attention to detail through comprehensive code reviews and documentation, reducing bug reports by 40%.",
        "Mentored 3 junior developers in MEAN stack technologies and best practices, contributing to a 30% increase in team productivity and code quality.",
      ],
    },
    {
      title: "Software Development Intern",
      company: "3Embed Software Technologies Pvt. Ltd.",
      location: "Surat, India",
      duration: "12/2020 – 06/2021",
      achievements: [
        "Developed responsive and user-friendly web applications using React, Angular, Node.js, and Express.js, contributing to both frontend and backend development.",
        "Demonstrated strong work ethic and adaptability through quick mastery of new technologies and efficient database integration for improved data handling.",
      ],
    },
  ];

  return (
    <section className="min-h-screen w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-[15%]"
        >
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-24">
            Work <span className="text-accent-main">Experience</span>
          </h2>

          {/* Experience Timeline */}
          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-8"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-accent-main/20" />

                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent-main 
                  transform -translate-x-1/2"
                />

                {/* Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-main">
                      {exp.title}
                    </h3>
                    <div className="text-text-secondary">
                      <span className="text-accent-main">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-text-tertiary font-medium">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span className="text-accent-main mt-2">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
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
