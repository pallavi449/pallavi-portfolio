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
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profileImage.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500 mb-6"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Hi, I'm <span className="text-blue-500">Pallavi Kumari</span>
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
        className="flex gap-6 mt-6 text-xl text-gray-400"
      >
        {/* GitHub */}
        <a
          href="https://github.com/pallavi449"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-white transition cursor-pointer" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pallavi-kumari-b90bb6267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-white transition cursor-pointer" />
        </a>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 mt-8"
      >
        <Link href="#projects">
          <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition">
            View Projects
          </button>
        </Link>

        <Link href="#contact">
          <button className="bg-gray-700 px-6 py-3 rounded-md hover:bg-gray-600 transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
}