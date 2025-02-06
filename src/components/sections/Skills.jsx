import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C/C++", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Angular",
        "Next JS",
        "Flask",
        "Express",
        "TailwindCSS",
        "Bootstrap",
        "jQuery",
        "HapiJs",
      ],
    },
    {
      title: "Data Science",
      skills: ["LLM", "Vector Embadding", "CNN", "Deep Learning", "RAG"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Neo4j", "PostgreSQL", "SQLite"],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Google Cloud Platform",
        "Azure",
        "Docker",
        "Kubernetes",
        "Nginx",
        "AgileMethodologies",
      ],
    },
    {
      title: "Tools & Analytics",
      skills: [
        "GitHub",
        "Jira",
        "Bitbucket",
        "Trello",
        "Postman",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
      ],
    },
  ];

  return (
    // <section className="min-h-screen w-full py-20">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //       className="ml-[15%]"
    //     >
    //       {/* Section Title */}
    //       <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-24">
    //         My <span className="text-accent-main">Skills</span>
    //       </h2>

    //       {/* Skills Grid */}
    //       <div className="grid md:grid-cols-2 gap-8">
    //         {skillCategories.map((category, categoryIndex) => (
    //           <motion.div
    //             key={category.title}
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    //             className="bg-background-secondary p-8 rounded-3xl space-y-6 cursor-default"
    //           >
    //             <h3 className="text-2xl font-bold text-accent-main">
    //               {category.title}
    //             </h3>

    //             <div className="flex flex-wrap gap-3">
    //               {category.skills.map((skill, skillIndex) => (
    //                 <motion.span
    //                   key={skill}
    //                   initial={{ opacity: 0, scale: 0.8 }}
    //                   animate={{ opacity: 1, scale: 1 }}
    //                   transition={{
    //                     duration: 0.3,
    //                     delay: categoryIndex * 0.1 + skillIndex * 0.05,
    //                     ease: "easeOut",
    //                   }}
    //                   className="px-4 py-2 rounded-full text-sm font-medium
    //                     bg-background-tertiary text-text-secondary
    //                     hover:bg-accent-main hover:text-text-primary
    //                     transform hover:scale-105 transition-all duration-300"
    //                 >
    //                   {skill}
    //                 </motion.span>
    //               ))}
    //             </div>
    //           </motion.div>
    //         ))}
    //       </div>

    //       {/* Soft Skills */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5, delay: 0.6 }}
    //         className="mt-12 bg-background-secondary p-8 rounded-3xl cursor-default"
    //       >
    //         <h3 className="text-2xl font-bold text-accent-main mb-6">
    //           Soft Skills
    //         </h3>

    //         <div className="flex flex-wrap gap-3">
    //           {[
    //             "Technical Writing",
    //             "Problem Solving",
    //             "Attention to Detail",
    //             "Team Mentoring",
    //             "Knowledge Sharing",
    //             "Time Management",
    //           ].map((skill, index) => (
    //             <motion.span
    //               key={skill}
    //               initial={{ opacity: 0, scale: 0.8 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               transition={{
    //                 duration: 0.3,
    //                 delay: 0.7 + index * 0.05,
    //                 ease: "easeOut",
    //               }}
    //               className="px-4 py-2 rounded-full text-sm font-medium
    //                 bg-background-tertiary text-text-secondary
    //                 hover:bg-accent-main hover:text-text-primary
    //                 transform hover:scale-105 transition-all duration-300"
    //             >
    //               {skill}
    //             </motion.span>
    //           ))}
    //         </div>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>

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
            My <span className="text-accent-main">Skills</span>
          </h2>

          {/* Skills Container */}
          <div className="flex flex-col gap-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <h3 className="text-3xl font-bold text-text-primary mb-8">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      className="group"
                    >
                      <div
                        className="relative p-4 bg-background-secondary rounded-lg
                        hover:bg-accent-main/10 transition-all duration-300
                        cursor-default border border-transparent
                        hover:border-accent-main/20"
                      >
                        <span
                          className="text-lg text-text-secondary group-hover:text-accent-main
                          transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Tools & Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <h3 className="text-3xl font-bold text-text-primary mb-8">
                Tools & Professional Skills
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Git",
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "Problem Solving",
                  "Team Leadership",
                  "Technical Writing",
                  "Agile Development",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="group"
                  >
                    <div
                      className="relative p-4 bg-background-secondary rounded-lg
                      hover:bg-accent-main/10 transition-all duration-300
                      cursor-default border border-transparent
                      hover:border-accent-main/20"
                    >
                      <span
                        className="text-lg text-text-secondary group-hover:text-accent-main
                        transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
