import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, CheckCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "PulsPense",
    description: "Money tracker app — offline, drive backup, easy to use",
    tech: ["Flutter", "Sqflite", "Google Drive API"],
    status: "completed",
    link: "#",
  },
  {
    title: "Library Management System",
    description: "College library system with efficient data handling",
    tech: ["Flutter", "Sqflite"],
    status: "progress",
    link: "#",
  },
  {
    title: "SMVGSC Library Website",
    description: "Informative site for college library, responsive and CMS-ready",
    tech: ["React", "TypeScript", "Tailwind", "HTML"],
    status: "completed",
    link: "https://sirmvgsclibrary.netlify.app/",
  },
  {
    title: "#2Code Website",
    description: "Informative site for Coders Club showcasing projects and updates",
    tech: ["React", "TypeScript", "Tailwind", "HTML"],
    status: "completed",
    link: "https://hash2code.netlify.app/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-14 md:mb-16 gradient-text">
            Projects I've Worked On
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group glass-card flex flex-col justify-between h-full rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(167,139,250,0.4)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300 leading-snug">
                      {project.title}
                    </h3>

                    <Badge
                      variant={
                        project.status === "completed" ? "default" : "secondary"
                      }
                      className={`flex items-center gap-1 px-2.5 py-1 text-xs sm:text-sm rounded-full font-medium ${
                        project.status === "completed"
                          ? "bg-green-500/20 text-green-400 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]"
                      } animate-glow-pulse`}
                    >
                      {project.status === "completed" ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          In Progress
                        </>
                      )}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-purple-300 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 rounded-full"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="gradient-text text-sm sm:text-base">
                          View Project
                        </span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
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
