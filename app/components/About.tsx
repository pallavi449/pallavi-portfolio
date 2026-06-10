export default function About() {
  return (
    <section id="about" className="bg-[#0b1220] text-white px-10 py-20">

      {/* SUMMARY */}
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
        Fresher Full Stack Developer and Computer Science Engineering student at Shivalik College of Engineering, Dehradun,
        with hands-on experience in frontend and backend web development. Developed and deployed an English Learning Platform
        used by 100+ users. Passionate about building scalable applications, teaching, and solving real-world problems.
      </p>

      {/* SKILLS */}
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8 mb-20">

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
      </div>

      {/* EXPERIENCE */}
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="space-y-8 max-w-4xl mx-auto mb-20">

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

      </div>

      {/* EDUCATION */}
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="space-y-6 max-w-3xl mx-auto">

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

      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="bg-[#121a2f] p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <ul className="text-gray-300 space-y-2">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
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
  return (
    <div className="bg-[#121a2f] p-6 rounded-xl">
      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-blue-400">
        {company} • {duration}
      </p>

      <ul className="text-gray-400 mt-3 space-y-2">
        {points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}