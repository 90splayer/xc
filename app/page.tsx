'use client';

import Intro from './comonents/Intro'
import Latest from './comonents/Latest'
import About from './comonents/About'
import Projects from './comonents/Projects'
import Contact from './comonents/Contact'
import Footer from './comonents/Footer'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Variants, useAnimationControls, useScroll, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="overflow-hidden bg-black text-white flex flex-col items-center justify-start">
      <Intro />
      <Latest />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <motion.button
        className={`fixed bottom-0 right-0 pr-2 pb-20 z-50 items-center text-xs flex gap-2 scrollToTopButton ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        BACK TO TOP
        <IoIosArrowRoundUp className="inline-block h-4 w-4" />
      </motion.button>
    </div>
  );
}
