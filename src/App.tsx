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

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    </>
  );
}

export default App;
