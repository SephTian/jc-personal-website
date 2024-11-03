// import { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.js';
import About from './components/About.tsx';
import Project from './components/Project.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Button from './components/UI/Button.tsx';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <NavBar isScrolled={isScrolled} />
      <main className="mx-auto w-full max-w-[1200px] mb-10">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
      <div className={`${isScrolled ? 'bottom-6' : '-bottom-24'} transition-all ease-in z-20 fixed right-6`}>
        <Button link="#" className="bg-customWhite">
          <MdKeyboardArrowUp className="h-10 w-10" />
        </Button>
      </div>
      <motion.div className="fixed right-0 bottom-0 left-0 h-3 bg-customBlack origin-[0%]" style={{ scaleX }}></motion.div>
    </>
  );
}

export default App;
