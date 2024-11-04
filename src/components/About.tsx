import abimg from '../assets/abimg.jpg';
import { useFadeInUpFramer } from '../hooks/useFadeInUpFramer';
import Button from './UI/Button';
import { IoDocumentTextOutline } from 'react-icons/io5';
import SectionTitle from './UI/SectionTitle';
import Skill from './UI/Skill';
import { motion, Variants } from 'framer-motion';
import ExperienceItem from './about/ExperienceItem';
import ExperiencePole from './about/ExperiencePole';

function About() {
  const [variants, hidden, visible]: [Variants, string, string] = useFadeInUpFramer();
  const skills = ['html', 'css', 'bootstrap', 'tailwind', 'js', 'ts', 'react', 'php', 'laravel'];
  return (
    <section id="about" className="p-4 w-full pt-24">
      <header className="flex justify-center items-center gap-6 mb-12">
        <div className="h-1 bg-customBlack flex-grow"></div>
        <SectionTitle title="About Me" />
        <div className="h-1 bg-customBlack flex-grow"></div>
      </header>
      <article className="space-y-10">
        <div className="w-full flex gap-6 flex-col justify-center items-center md:flex-row">
          <motion.div
            variants={variants}
            initial={hidden}
            whileInView={visible}
            viewport={{ once: true }}
            className="h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] md:h-[400px] md:2-[300px] shadow-div rounded-sm border border-customBlack"
          >
            <img className="object-cover object-bottom w-full h-full" src={abimg} alt="images" />
          </motion.div>
          <div className="space-y-6">
            <motion.p viewport={{ once: true }} variants={variants} initial={hidden} whileInView={visible} className="text-pretty text-justify md:max-w-[600px]">
              Hello! I'm Joseph, a Business Information Systems graduate and a passionate Front-End Developer dedicated to crafting responsive, user-friendly websites that balance performance and
              design.
            </motion.p>
            <motion.p viewport={{ once: true }} variants={variants} initial={hidden} whileInView={visible} className="text-pretty text-justify md:max-w-[600px]">
              I strive to deliver high-quality, accessible code that enhances user experience and aligns with business goals.
            </motion.p>
            <div className="w-full">
              <Button link="../assets/abimg.jpg" className="w-full gap-2 bg-[#FF9AA8] h-fit px-6 py-3 md:px-6 md:py-4">
                <IoDocumentTextOutline className="bg-transparent w-5 h-5 " /> Resume
              </Button>
            </div>

            <motion.div viewport={{ once: true }} variants={variants} initial={hidden} whileInView={visible} className="flex justify-center md:justify-start ">
              <div className="bg-[#f2f2f2] w-full h-fit p-4 shadow-div border border-customBlack space-y-4">
                <h3 className="underline text-center">Tech Stack</h3>
                <div className="flex justify-center gap-3 flex-wrap">
                  {skills.map((skill) => (
                    <Skill skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <h3 className="font-bold text-center text-lg md:text-xl"> Experience</h3>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-[300px_auto] md:grid-cols-[300px_auto_300px] gap-9">
            <div className="order-1">
              <ExperienceItem job="FRONT END WEB DEVELOPER" workplace="PT Cross Network Indonesia" date="Jul 2023 - Dec 2023 | 6 months" />
            </div>
            <div className="order-2 ">
              <ExperiencePole />
            </div>
            <div className="order-3 hidden"></div>
          </div>
          {/* <div className="grid grid-cols-[300px_auto] md:grid-cols-[300px_auto_300px] gap-9">
            <div className="hidden md:order-1 md:block"></div>
            <div className="order-2">
              <ExperiencePole />
            </div>
            <div className="order-1 md:order-3">
              <ExperienceItem job="FRONT END WEB DEVELOPER" workplace="PT Cross Network Indonesia" date="Jul 2023 - Dec 2023 | 6 months" />
            </div>
          </div> */}
        </div>
      </article>
    </section>
  );
}

export default About;
