"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  const projects = [
    {
      title: "File Upload API",
      desc: "A backend system for uploading, managing, and accessing files with secure storage and API documentation.",
      tech: ["Node.js", "Express.js", "MongoDB", "Multer", "Swagger", "Render"],
      github: "https://github.com/pallavi449/file-upload-api",
      live: "https://file-upload-api.onrender.com",
    },
    {
      title: "Real-Time Chat Application",
      desc: "A real-time chat application with instant messaging using WebSockets.",
      tech: ["Node.js", "Express.js", "Socket.io", "JavaScript", "Render"],
      github: "https://github.com/pallavi449/realtime-chat",
      live: "https://realtime-chat.onrender.com",
    },
    {
      title: "English Learning App",
      desc: "An interactive English learning application to improve grammar, vocabulary, and communication skills.",
      tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/pallavi449/english-learning-app",
      live: "https://english-app.vercel.app",
    },
    {
      title: "Portfolio Website",
      desc: "My personal developer portfolio showcasing projects, skills, and experience.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/pallavi449/portfolio",
      live: "https://portfolio.vercel.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <main className="min-h-screen bg-[#0b1120] px-10 py-16 text-white">

      {/* Projects Section */}
      <section id="projects">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Projects
          </h1>
          <p className="text-gray-400">
            Some of the projects I’ve built using backend and full-stack technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02, 
                boxShadow: "0px 10px 30px -10px rgba(236,72,153,0.5)" 
              }}
              className="relative rounded-xl bg-[#111827] p-6 shadow-lg border border-gray-800 hover:border-pink-500/50 transition-colors group overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="h-1 w-full rounded bg-gradient-to-r from-pink-500 to-blue-500 mb-4 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.8)] transition-shadow" />

              <h2 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4 relative z-10">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs rounded-full bg-blue-900/40 px-3 py-1 text-blue-300 border border-blue-800/50 group-hover:border-blue-400/50 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 text-sm font-medium relative z-10">
                {/* GitHub */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#f472b6" }}
                  className="text-gray-400 transition-colors flex items-center gap-1"
                >
                  GitHub
                </motion.a>

                {/* Live Demo */}
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  className="text-gray-400 transition-colors flex items-center gap-1"
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}