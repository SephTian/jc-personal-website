import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { motion, Variants } from 'framer-motion';
import { useFadeInDownFramer } from '../hooks/useFadeInDownFramer';

type Props = {
  isScrolled: boolean;
};

function NavBar({ isScrolled }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [variants, hidden, visible]: [Variants, string, string] = useFadeInDownFramer();

  return (
    <header className="w-full z-20 sticky top-0 bg-transparent">
      <nav className="mx-auto w-full max-w-[1200px] p-4 bg-transparent">
        <motion.div
          variants={variants}
          initial={hidden}
          whileInView={visible}
          viewport={{ once: true }}
          className={`bg-customWhite transition-border relative h-[70px] flex justify-between items-center ${isScrolled && 'border border-customBlack'}`}
        >
          <a href="#" className="font-bold text-4xl cursor-pointer px-4">
            JC.
          </a>

          <button
            className="transition-all z-20 h-12 w-12 relative md:hidden text-end overflow-hidden mr-2"
            onClick={() => {
              setIsMenuOpen((prev: boolean) => (prev ? false : true));
            }}
          >
            <MdOutlineMenu className={`ease-in-out duration-500 bg-transparent absolute ${isMenuOpen ? '-top-5' : 'top-0'} left-0 w-full h-full`} />
            <div className={`text-xs text-center ${!isMenuOpen && 'hidden'}`}>close</div>
            <MdOutlineMenu className={`ease-in-out duration-500 bg-transparent absolute ${isMenuOpen ? '-bottom-5' : 'bottom-0'} left-0 w-full h-full`} />
          </button>

          <ul
            className={`${
              isMenuOpen ? 'pt-16 -top-[1px]' : 'pt-0 -top-[300px]'
            } transition-all ease-in-out duration-300 bg-customWhite rounded-sm border border-customBlack text-md absolute -right-[1px] w-[140px] flex flex-col justify-end md:animate-none md:h-fit md:w-fit md:pt-0 md:border-none md:static md:flex-row`}
          >
            <li className="mx-3 py-4 border-customBlack border-b-2 md:my-0 md:mx-0 md:px-4 md:py-0 md:border-r-2 md:border-y-0 ">
              <a href="#" className="block cursor-pointer text-center hover:font-bold">
                Home
              </a>
            </li>
            <li className="mx-3 py-4 border-customBlack border-b-2 md:my-0 md:mx-0 md:px-4 md:py-0 md:border-r-2 md:border-y-0">
              <a href="#about" className="block cursor-pointer text-center hover:font-bold">
                About
              </a>
            </li>
            <li className="mx-3 py-4 border-customBlack border-b-2 md:my-0 md:mx-0 md:px-4 md:py-0 md:border-r-2 md:border-y-0">
              <a href="#project" className="block cursor-pointer text-center hover:font-bold">
                Project
              </a>
            </li>
            <li className="mx-3 py-4 border-customBlack md:my-0 md:mx-0 md:px-4 md:py-0">
              <a href="#contact" className="block cursor-pointer text-center hover:font-bold">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </header>
  );
}

export default NavBar;
