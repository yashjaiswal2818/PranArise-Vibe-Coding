import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 p-6 md:p-8 bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-t-3xl shadow-lg border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <div className="flex items-center justify-center mb-2">
          <p className="text-sm">Made by <span className="font-semibold">Yash Jaiswal</span> using AI tools</p>
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <a
            href="https://www.linkedin.com/in/yash-jaiswal-093684344"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>Yash Jaiswal</span>
          </a>
        </div>

        <p className="mt-4 text-xs">
          &copy; {new Date().getFullYear()} PranArise. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;