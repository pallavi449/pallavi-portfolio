"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-[#0b1120] px-10 py-20 text-white flex items-center justify-center">
      
      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto w-full">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Contact Me
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project, question, or just want to say hi? Let’s talk.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-[#111827]/80 backdrop-blur-md p-10 shadow-2xl border border-gray-800 relative"
        >
          {/* Animated decorative glowing orbs */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20 pointer-events-none" />

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl bg-[#0b1120] border border-gray-700 px-5 py-4 text-sm text-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl bg-[#0b1120] border border-gray-700 px-5 py-4 text-sm text-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-[#0b1120] border border-gray-700 px-5 py-4 text-sm text-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner resize-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-bold tracking-wide hover:from-blue-500 hover:to-indigo-500 transition-all"
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Extra Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-400 text-sm space-y-3"
        >
          <motion.p whileHover={{ scale: 1.05 }} className="inline-block mx-4">
            Email: <a href="mailto:pk4499753@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">pk4499753@gmail.com</a>
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="inline-block mx-4">
            Location: <span className="text-white">India</span>
          </motion.p>
        </motion.div>

      </section>
    </main>
  );
}
