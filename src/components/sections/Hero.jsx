import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import EmailLink from "../EmailLink";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-left"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary">
            Hey, I'm <span className="text-accent-main">Parth Tejani</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-text-secondary max-w-2xl">
            A passionate full-stack developer specializing in MEAN/MERN stack,
            crafting scalable and user-friendly web experiences
          </h2>

          {/* Professional Summary */}
          <p className="text-text-tertiary text-lg max-w-2xl">
            Master's in Computer Science graduate with focus in AI/ML, bringing
            strong technical expertise and innovative problem-solving skills to
            every project.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/parthtejani27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent-main transition-colors"
              aria-label="GitHub"
            >
              <Image
                src="/icon/github.svg"
                alt="GitHub"
                width={50}
                height={50}
                className="dark:invert"
              />
            </a>
            <a
              href="https://linkedin.com/in/parthtejani27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent-main transition-colors"
              aria-label="LinkedIn"
            >
              <Image
                src="/icon/linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <EmailLink />
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {[
              "React",
              "Angular",
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "AWS",
              "Docker",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 rounded-full text-text-primary bg-background-secondary"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
