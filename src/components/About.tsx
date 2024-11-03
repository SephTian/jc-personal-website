import abimg from '../assets/abimg.jpg';
// import Button from './UI/Button';
import SectionTitle from './UI/SectionTitle';
// import { IoDocumentTextOutline } from 'react-icons/io5';
import Skill from './UI/Skill';

function About() {
  return (
    <section id="about" className="p-4 w-full pt-24">
      <header className="flex justify-center items-center gap-6 mb-12">
        <div className="h-1 bg-customBlack flex-grow"></div>
        <SectionTitle title="About Me" />
        <div className="h-1 bg-customBlack flex-grow"></div>
      </header>
      <article className="w-full flex gap-6 flex-col justify-center items-center md:flex-row">
        <div className="h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] md:h-[400px] md:2-[300px] shadow-div rounded-sm border border-customBlack">
          <img className="object-cover object-bottom w-full h-full" src={abimg} alt="images" />
        </div>
        <div className="space-y-6">
          <p className="text-pretty text-justify md:max-w-[600px]">
            Hi, I'm Joseph, a passionate Front End Web Developer focused on crafting responsive, user-friendly websites that balance performance and design.
          </p>
          <p className="text-pretty text-justify md:max-w-[600px]">I strive to deliver high-quality, accessible code that enhances user experience and aligns with business goals.</p>
          {/* <div className="flex justify-center md:justify-start">
            <Button link="" className="gap-2 bg-[#FF9AA8] h-fit w-fit px-6 py-3 md:px-6 md:py-4">
              <IoDocumentTextOutline className="bg-transparent w-5 h-5 " /> Resume
            </Button>
          </div> */}
          <div className="flex justify-center md:justify-start ">
            <div className="bg-[#f2f2f2] w-fit h-fit p-4 shadow-div border border-customBlack space-y-4">
              <h3 className="underline text-center">Tech Stack</h3>
              <div className="flex gap-3 flex-wrap">
                <Skill skill="html" />
                <Skill skill="css" />
                <Skill skill="bootstrap" />
                <Skill skill="tailwind" />
                <Skill skill="js" />
                <Skill skill="react" />
                <Skill skill="ts" />
                <Skill skill="laravel" />
                <Skill skill="php" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
