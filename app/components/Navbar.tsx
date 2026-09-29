"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Learning Journey", href: "#Learning Journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="flex justify-between items-center px-10 py-6 fixed w-full bg-[#0b1220]/80 backdrop-blur-md z-50 shadow-lg border-b border-gray-700/50"
    >
      <motion.h1 
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(59, 130, 246)" }}
        className="text-xl font-bold text-blue-500 cursor-pointer"
      >
        Portfolio
      </motion.h1>

      <ul className="flex gap-6 text-gray-300">
        {navLinks.map((link, index) => (
          <motion.li 
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <motion.a 
              href={link.href} 
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-2 py-1 transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
