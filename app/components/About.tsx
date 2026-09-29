"use client";

import { motion } from "framer-motion";

export default function About() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="bg-[#0b1220] text-white px-10 py-20 overflow-hidden">

      {/* SUMMARY */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
      >
        Fresher Full Stack Developer and Computer Science Engineering student at Shivalik College of Engineering, Dehradun,
        with hands-on experience in frontend and backend web development. Developed and deployed an English Learning Platform
        used by 100+ users. Passionate about building scalable applications, teaching, and solving real-world problems.
      </motion.p>

      {/* SKILLS */}
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
      >
        Skills
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 mb-20"
      >

        <SkillCard
          title="Programming Languages"
          items={[
            "C, C++",
            "Python",
            "JavaScript",
            "HTML, CSS",
            "SQL, MySQL, MongoDB",
            "TypeScript",
          ]}
        />

        <SkillCard
          title="Frameworks & Libraries"
          items={[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "Redux",
            "NextAuth",
            "Socket.io",
            "Tailwind CSS",
          ]}
        />

        <SkillCard
          title="Tools & Platforms"
          items={[
            "Git, GitHub",
            "Postman",
            "VS Code",
            "Render",
            "Vercel",
            "Jupyter Notebook",
          ]}
        />
      </motion.div>

      {/* EXPERIENCE */}
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"
      >
        Experience
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8 max-w-4xl mx-auto mb-20"
      >

        <ExperienceCard
          role="Corporate Trainer (Full Stack Development)"
          company="Soft Nexis Technology"
          duration="Feb 2026 – Present · Remote"
          points={[
            "Delivering training sessions on Full Stack Development technologies.",
            "Teaching Node.js, Express.js, MongoDB, and frontend fundamentals to learners.",
            "Guiding students in building real-world projects and improving problem-solving skills.",
          ]}
        />

        <ExperienceCard
          role="Full Stack Development Intern"
          company="SYNTECXHUB"
          duration="June 2026 – July 2026"
          points={[
            "Developed RESTful APIs using Node.js and Express.js for backend operations.",
            "Managed MongoDB databases and implemented CRUD functionalities.",
            "Improved API performance and system reliability through debugging and optimization.",
          ]}
        />

        <ExperienceCard
          role="Software Developer Intern"
          company="Minimalistic Technology"
          duration="July 2025 – Oct 2025"
          points={[
            "Built 4+ web applications using modern full-stack technologies.",
            "Integrated 10+ APIs for seamless data communication.",
            "Designed and managed MongoDB databases for efficient storage and retrieval.",
          ]}
        />

      </motion.div>

      {/* EDUCATION */}
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
      >
        Education
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 max-w-3xl mx-auto"
      >

        <div className="bg-[#121a2f] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Bachelor of Technology (B.Tech), Computer Science and Engineering
          </h3>
          <p className="text-blue-400">
            Shivalik College of Engineering, Dehradun • 2022 – 2026
          </p>
          <p className="text-gray-400 mt-2">
            CGPA: 7.2 / 10
          </p>
        </div>

        <div className="bg-[#121a2f] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Senior Secondary (Class XII)
          </h3>
          <p className="text-blue-400">
            Lakshya Raj Public School • 2019 – 2021
          </p>
          <p className="text-gray-400 mt-2">
            Percentage: 83%
          </p>
        </div>

      </motion.div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 10px 30px -10px rgba(59,130,246,0.3)" }}
      className="bg-gradient-to-b from-[#121a2f] to-[#0b1220] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors relative group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">{title}</h3>
      <ul className="text-gray-400 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-blue-500 text-xs">▹</span> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

type ExperienceCardProps = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

function ExperienceCard({
  role,
  company,
  duration,
  points,
}: ExperienceCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ scale: 1.01, x: 5, boxShadow: "0px 10px 30px -10px rgba(249,115,22,0.2)" }}
      className="bg-[#121a2f]/80 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-orange-500 hover:bg-[#162032] transition-colors relative"
    >
      <h3 className="text-2xl font-bold text-white">{role}</h3>
      <p className="text-orange-400 font-medium mt-1">
        {company} <span className="text-gray-500 mx-2">•</span> {duration}
      </p>

      <ul className="text-gray-400 mt-5 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">✓</span> 
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}