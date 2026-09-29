"use client";

import { motion } from "framer-motion";

export default function BlogsPage() {
  const learnings = [
    {
      title: "Next.js Learning Journey",
      desc: "Learning routing, server components, and building full-stack applications using Next.js.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "TypeScript with React",
      desc: "Practicing type safety, interfaces, and scalable frontend architecture in React projects.",
      color: "from-blue-600 to-indigo-500"
    },
    {
      title: "Backend Development",
      desc: "Building REST APIs using Node.js, Express, and MongoDB with authentication and CRUD operations.",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "React & UI Development",
      desc: "Improving UI skills using Tailwind CSS and understanding component-based architecture.",
      color: "from-cyan-400 to-teal-400"
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploying full-stack applications on Vercel and Render with environment configuration.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Problem Solving (DSA)",
      desc: "Practicing Data Structures and Algorithms regularly to improve logical thinking and coding skills.",
      color: "from-orange-500 to-yellow-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <main className="min-h-screen bg-[#0b1120] px-10 py-20 text-white">

      {/* Learning Journey Section */}
      <section id="Learning Journey">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Learning Journey
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My ongoing learning, practice, and development experience in modern web technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {learnings.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-xl bg-[#111827] p-6 shadow-lg border border-gray-800 transition-all group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color} group-hover:w-2 transition-all duration-300`} />
              
              <h2 className="text-xl font-bold mb-3 group-hover:text-white text-gray-200 transition-colors pl-2">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm pl-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </section>
    </main>
  );
}