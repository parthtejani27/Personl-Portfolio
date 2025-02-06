import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
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
            About <span className="text-accent-main">Me</span>
          </h2>

          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-32">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full max-w-[400px] mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-main to-accent-secondary opacity-20 blur-lg transform -translate-x-2 translate-y-2" />
              <div
                className="relative w-full h-full rounded-full overflow-hidden 
                            ring-8 ring-black dark:ring-white
                            shadow-[0_0_0_8px_rgba(0,0,0,0.1)]
                            dark:shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
              >
                <Image
                  src="/images/2.png"
                  alt="Parth Tejani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-text-secondary text-xl leading-relaxed">
                  Full Stack Developer with expertise in MEAN/MERN stack,
                  specializing in building scalable web applications. I combine
                  technical excellence with a passion for creating intuitive
                  user experiences.
                </p>

                <p className="text-text-secondary text-xl leading-relaxed">
                  With a Master's in Computer Science focused on AI/ML, I bring
                  a unique blend of theoretical knowledge and practical
                  expertise to every project. My experience includes
                  architecting efficient web applications, optimizing database
                  performance, and implementing CI/CD pipelines.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-accent-main">
                  Key Achievements
                </h3>
                <ul className="space-y-4 text-text-secondary text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-main text-2xl mt-1">•</span>
                    <span>
                      Improved application performance by 40% through efficient
                      API design and optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-main text-2xl mt-1">•</span>
                    <span>
                      Reduced deployment time by 70% using CI/CD pipelines while
                      maintaining 99.9% uptime
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-main text-2xl mt-1">•</span>
                    <span>
                      Mentored junior developers and established best practices,
                      boosting team productivity by 30%
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-accent-main">
                  Education
                </h3>
                <div className="text-text-secondary text-lg space-y-1">
                  <p className="font-medium">
                    M.Sc. in Computer Science (Grade: A)
                  </p>
                  <p>Lakehead University, Thunder Bay, ON</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
