'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-[50vh] min-h-[300px] flex items-center bg-[#2c3e50] relative overflow-hidden pt-20"
    >
      {/* Background Image - Hidden on mobile */}
      <div className="hidden xl:block absolute left-0 top-20 bottom-0 w-1/3">
        <Image
          src="/heroo.png"
          alt="Background geometric shapes"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:ml-auto max-w-3xl md:pl-15"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
          >
            NAUFAL SYAFI'
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 font-mono"
          >
            IT Student at ITS | AI/ML • Soft Eng • Data
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400 rounded-lg font-medium transition-all text-sm sm:text-base"
            >
              View Projects
            </button>
            <a
              href="/Naufal-resume-4.pdf"
              download
              className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-medium transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-400 rounded-lg font-medium transition-all text-sm sm:text-base"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
