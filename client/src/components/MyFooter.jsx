import React from "react";
import {
  FaHeart,
  FaCode,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  HiOutlineCode,
  HiOutlineSparkles,
} from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const MyFooter = () => {
  const currentYear = new Date().getFullYear();
  const version = "4.0";

  const technologies = [
    "React",
    "Node.js",
    "Tailwind CSS",
    "Express",
    "PlayWright",
    "Framer Motion",
    "Vercel",
    "REST API",
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-gradient-to-b from-white/60 to-white/30 dark:from-gray-900/70 dark:to-gray-800/50 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 mt-12"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-sky-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4   pt-8 pb-4 sm:pt-10 sm:px-10 lg:pt-12 lg:px-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Section - Developer Info */}
          <motion.div
            className="space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-4">
              {/* Avatar/Icon */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 shadow-xl shadow-emerald-500/20">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <HiOutlineCode className="text-3xl text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-300"></div>
              </motion.div>

              {/* Text Content */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    Muhammad Umair
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <FaGraduationCap className="text-emerald-500" />
                    <span>BSCS Student • UAF 22-26</span>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                    <IoRocketSharp className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="px-3 py-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Divider */}
          <div className="hidden lg:flex justify-center">
            <div className="h-40 w-px bg-gradient-to-b from-transparent via-gray-300/50 dark:via-gray-600/50 to-transparent"></div>
          </div>

          {/* Right Section - Social Links */}
          <motion.div
            className="flex space-y-6 flex-col justify-center items-center "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
              <HiOutlineSparkles className="text-emerald-600 dark:text-emerald-400 text-xl" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Connect With Me
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex justify-center"
            >
              <a
                href="https://umair12x.github.io/profiles/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-300/50 dark:hover:border-emerald-700/50 transition-all shadow-lg hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg group-hover:rotate-12 transition-transform">
                  <FaExternalLinkAlt className="text-white text-sm" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Explore My Portfolio
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Interactive social card & projects
                  </div>
                </div>
              </a>
            </motion.div>
            <div className="flex items-center  sm:flex-row flex-col justify-center md:justify-start gap-3 text-sm text-gray-600 dark:text-gray-400 text-5">
              <div className="flex items-center gap-1">
                <FaCode className="text-emerald-500" />
                <span>Version {version}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="flex items-center gap-1">
                <FaHeart className="text-red-500 animate-pulse" />
                <span>Made with passion for UAF students</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-600/50 to-transparent"></div>
        </motion.div>

        <div >
          <p className="text-gray-700 dark:text-gray-300 font-light text-sm text-center">
            © {currentYear} UAF CGPA Calculator • All Rights Reserved
          </p>
        </div>

        <div className="lg:hidden my-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300/30 dark:via-gray-600/30 to-transparent"></div>
        </div>

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            This tool helps UAF students calculate their CGPA easily.
            <span className="italic text-gray-400 dark:text-gray-500">
              Note: Results are for reference purposes only.
            </span>
            It uses data from UAF's LMS Portal and might contain errors. Always
            verify with official university records.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default MyFooter;
