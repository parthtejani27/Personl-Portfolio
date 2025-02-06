import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Shopping Genie",
      description:
        "An intelligent chatbot that combines deep learning (BERT, LSTM) and Retrieval Augmented Generation (RAG) to provide personalized e-commerce assistance. The project focuses on creating a next-generation chatbot for enhanced customer service in e-commerce applications.",
      image: "/project-images/shopping-genie.png",
      techStack: ["BERT", "LSTM", "RAG", "ChatGPT API"],
      achievements: [
        "99.70% accuracy in intent classification",
        "30% improvement in response accuracy",
        "Efficient response generation pipeline",
      ],
      github: "https://github.com/parthtejani27/Shopping-Genie",
    },
    {
      title: "Grocery Shopping App",
      description:
        "BagItNow is a modern, full-featured grocery shopping platform built with React, Redux, and Tailwind CSS. It provides a seamless shopping experience with features like dark mode support, real-time order tracking, and secure payment processing.",
      image: "/project-images/grocery.jpg",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "JWT",
        "Tailwind",
      ],
      achievements: [
        "Secure authentication flow",
        "Stripe payment integration",
        "Dark/light mode support",
        "Google Maps integration",
      ],
      github: "https://github.com/parthtejani27/BagItNow-Frontend",
      demo: "https://bag-it-now-frontend.vercel.app/",
    },

    {
      title: "CinesVault",
      description:
        "A modern movie browsing application built with React and Tailwind CSS, powered by The Movie Database (TMDB) API.",
      image: "/project-images/cinesvault.jpg",
      techStack: ["React", "Tailwind"],
      achievements: [
        "Responsive design for all devices",
        "Add movies to your watchlist",
      ],
      github: "https://github.com/parthtejani27/CinemaVault-React",
      demo: "https://cinema-vault-react.vercel.app/",
    },
    {
      title: "Image Colorization Web Application",
      description:
        "A Flask-based web application that colorizes black and white images using deep learning with a Caffe model.",
      image: "/project-images/image-colorization.jpg",
      techStack: ["Deep Learning", "Flask", "SQLite", "OpenCV", "Caffe Model"],
      achievements: [
        "Convert black and white images to color using deep learning",
        "User authentication and profile management",
        "Dashboard to view colorization results",
      ],
      github: "https://github.com/parthtejani27/image-colorization",
    },
    {
      title: "Debris-Covered Glaciers Classification",
      description:
        "This research project focuses on applying supervised classification methods to distinguish between debris-covered glaciers and non-glaciated areas using remote sensing data.",
      image: "/project-images/classification.jpeg",
      techStack: ["Data Preprocessing", "Classification Models"],
      achievements: [
        "Achieved 96.90% classification accuracy in glacier identification",
        "Processed and analyzed over 1 million data instances with 23 features",
        "Implemented SMOTE algorithm for handling class imbalance",
      ],
      github: "https://github.com/parthtejani27/image-colorization",
    },
  ];

  return (
    <section className="min-h-screen w-full py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-[15%]"
        >
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-24 cursor-default">
            My <span className="text-accent-main">Projects</span>
          </h2>

          {/* Projects Grid */}
          <div className="grid gap-16 cursor-default">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative grid lg:grid-cols-[1.5fr,2fr] gap-8 bg-background-secondary p-8 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-accent-main/10 group-hover:bg-accent-main/5 transition-all duration-300" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-text-secondary hover:text-accent-main transition-colors"
                      aria-label="View Live demo"
                    >
                      <h3 className="text-3xl font-bold text-text-primary group-hover:text-accent-main transition-colors duration-300 cursor-pointer">
                        {project.title}
                      </h3>
                    </a>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-secondary hover:text-accent-main transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Image
                          src="/icon/github.svg"
                          alt="GitHub"
                          width={50}
                          height={50}
                          className="dark:invert"
                        />
                      </a>
                      {/* <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-text-secondary hover:text-accent-main transition-colors"
                        aria-label="View Live Demo"
                      >
                        <Image
                          src="/icon/external-link.svg"
                          alt="Live Demo"
                          width={50}
                          height={50}
                          className="dark:invert"
                        />
                      </a> */}
                    </div>
                  </div>

                  <p className="text-text-secondary text-lg leading-relaxed cursor-default">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 cursor-default">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-background-tertiary text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-accent-main cursor-default">
                      Key Features
                    </h4>
                    <ul className="space-y-2 cursor-default">
                      {project.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-text-secondary"
                        >
                          <span className="text-accent-main text-xl mt-1">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Projects;
