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

  return (
    <main className="min-h-screen bg-[#0b1120] px-10 py-16 text-white">

      {/* Projects Section */}
      <section id="projects">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400">
            Some of the projects I’ve built using backend and full-stack technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#111827] p-6 shadow-lg hover:scale-[1.03] transition"
            >
              <div className="h-1 w-full rounded bg-gradient-to-r from-pink-500 to-blue-500 mb-4" />

              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs rounded-full bg-blue-900/40 px-3 py-1 text-blue-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 text-sm text-gray-400">

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Live Demo
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}