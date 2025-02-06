import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-left "
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            About <span className="text-accent-main">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64"
            >
              <Image
                src="/images/profile.png"
                alt="Parth Tejani"
                fill
                className="rounded-2xl object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl space-y-4"
            >
              <p className="text-text-secondary text-lg">
                Full Stack Developer with expertise in MEAN/MERN stack,
                specializing in building scalable web applications. I combine
                technical excellence with a passion for creating intuitive user
                experiences.
              </p>

              <p className="text-text-secondary text-lg">
                With a Master's in Computer Science focused on AI/ML, I bring a
                unique blend of theoretical knowledge and practical expertise to
                every project. My experience includes architecting efficient web
                applications, optimizing database performance, and implementing
                CI/CD pipelines.
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="text-xl font-semibold text-accent-main">
                  Key Achievements:
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-main">•</span>
                    Improved application performance by 40% through efficient
                    API design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-main">•</span>
                    Reduced deployment time by 70% using CI/CD pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-main">•</span>
                    Mentored junior developers, boosting team productivity by
                    30%
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-accent-main mb-2">
                  Education
                </h3>
                <p className="text-text-secondary">
                  M.Sc. in Computer Science (Grade: A)
                  <br />
                  Lakehead University, Thunder Bay, ON
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
