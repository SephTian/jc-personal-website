import person from '../assets/person.png';
import Button from './UI/Button';
import PlatformButton from './UI/PlatformButton';
import { AiOutlineDiscord, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { TbSend } from 'react-icons/tb';

function Hero() {
  return (
    <section className="p-4">
      <div className="relative bg-customGray px-4 py-8 border border-customBlack rounded-sm h-fit w-full shadow-div flex flex-col justify-center items-center gap-3 sm:gap-6 md:py-14 md:flex-row">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col gap-4 h-[250px] items-center md:h-[310px]">
            <div className="flex-grow w-1 bg-customBlack"></div>
            <PlatformButton color="#88eeee" link="https://linkedin.com/in/joseph-christian-a5b299271">
              <AiOutlineLinkedin className="aspect-square h-5 bg-transparent" />
            </PlatformButton>
            <PlatformButton color="#d0a9ff" link="https://github.com/SephTian">
              <AiOutlineGithub className="aspect-square h-5 bg-transparent" />
            </PlatformButton>
            <PlatformButton color="#9ba8ff" link="https://discordapp.com/users/343581363745718273">
              <AiOutlineDiscord className="aspect-square h-5 bg-transparent" />
            </PlatformButton>
          </div>
          <div className="h-[320px] md:h-[450px]">
            <img src={person} className="object-contain h-full w-full" />
          </div>
        </div>
        <div className="space-y-3 md:space-y-8 md:pt-12">
          <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-start lg:text-4xl">Front End Web Developer</h1>
          <p className="text-pretty text-md text-center max-w-[500px] sm:text-xl md:text-start sm:max-w-[650px] lg:text-2xl">
            Hello👋, my name is Joseph Christian, <br /> front end web developer from Indonesia.
          </p>
          <p className="text-pretty text-md text-center max-w-[500px] sm:text-xl md:text-start sm:max-w-[650px] lg:text-2xl">Let’s create something amazing together!</p>
          <div className="w-full pt-4 flex justify-center md:mt-0 md:pt-0 md:justify-start">
            <Button link="#contact" className="gap-2 bg-[#F9AD4F] h-fit w-fit px-6 py-3 md:px-6 md:py-6">
              <TbSend className="bg-transparent w-5 h-5" /> Contact Me
            </Button>
          </div>
        </div>
        <div className="absolute top-3 right-3 font-bold text-3xl sm:text-4xl sm:top-4 sm:right-4 md:text-5xl md:top-5 md:right-5">JC.</div>
      </div>
    </section>
  );
}

export default Hero;
