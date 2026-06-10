export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b1120] px-10 py-20 text-white">
      
      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-3">Contact Me</h1>
          <p className="text-gray-400">
            Have a project, question, or just want to say hi? Let’s talk.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl bg-[#111827] p-8 shadow-lg">
          <form className="space-y-6">
            
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg bg-[#0b1120] border border-gray-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-[#0b1120] border border-gray-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-lg bg-[#0b1120] border border-gray-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Extra Contact Info */}
        <div className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>Email: <span className="text-white">pk4499753@gmail.com</span></p>
          <p>Location: <span className="text-white">India</span></p>
        </div>

      </section>
    </main>
  );
}
