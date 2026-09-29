"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0b1220]"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src="/profileImage.png"
          alt="Profile"
          width={150}
          height={150}
          className="relative rounded-full border-4 border-transparent bg-clip-padding z-10 mb-6 object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold dark:text-white text-black flex items-center justify-center flex-wrap"
      >
        <span className="mr-3">Hi, I'm</span>
        <span className="flex pb-2">
          {"Pallavi Kumari".split("").map((char, index, array) => {
            // Calculate a gradient color based on the letter's index (Blue to Pink)
            const hue = 210 + (index / (array.length - 1)) * 120;
            const baseColor = `hsl(${hue}, 100%, 65%)`;

            return (
              <motion.span
                key={index}
                style={{ color: baseColor }}
                whileHover={{
                  color: "#ffffff",
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                }}
                transition={{ duration: 0 }}
                className="inline-block cursor-pointer drop-shadow-md transition-colors"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-gray-400 max-w-xl"
      >
        Full Stack Developer | Backend Developer | MERN & Next.js Enthusiast
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-6 mt-6 text-2xl text-gray-400"
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/pallavi449"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: "#fff", scale: 1.2, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="transition cursor-pointer" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/pallavi-kumari-b90bb6267"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: "#0077b5", scale: 1.2, textShadow: "0px 0px 8px rgba(0,119,181,0.8)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="transition cursor-pointer" />
        </motion.a>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 mt-10"
      >
        <Link href="#projects">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-8 py-3 rounded-full transition-all"
          >
            View Projects
          </motion.button>
        </Link>

        <Link href="#contact">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(156, 163, 175, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-gray-600 text-gray-300 font-medium px-8 py-3 rounded-full hover:border-gray-400 hover:text-white transition-all"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}