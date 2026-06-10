export default function BlogsPage() {
  const learnings = [
    {
      title: "Next.js Learning Journey",
      desc: "Learning routing, server components, and building full-stack applications using Next.js.",
    },
    {
      title: "TypeScript with React",
      desc: "Practicing type safety, interfaces, and scalable frontend architecture in React projects.",
    },
    {
      title: "Backend Development",
      desc: "Building REST APIs using Node.js, Express, and MongoDB with authentication and CRUD operations.",
    },
    {
      title: "React & UI Development",
      desc: "Improving UI skills using Tailwind CSS and understanding component-based architecture.",
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploying full-stack applications on Vercel and Render with environment configuration.",
    },
    {
      title: "Problem Solving (DSA)",
      desc: "Practicing Data Structures and Algorithms regularly to improve logical thinking and coding skills.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b1120] px-10 py-20 text-white">

      {/* Learning Journey Section */}
      <section id="learning-journey">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-3">Learning Journey</h1>
          <p className="text-gray-400">
            My ongoing learning, practice, and development experience in modern web technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {learnings.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#111827] p-6 shadow-lg hover:scale-[1.03] transition"
            >
              <h2 className="text-lg font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}