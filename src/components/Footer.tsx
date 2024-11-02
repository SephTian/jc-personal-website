import { AiOutlineDiscord, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import PlatformButton from './UI/PlatformButton';

function Footer() {
  return (
    <footer className="w-full bg-customWhite border-t border-customBlack">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10">
        <div className="flex justify-between items-center gap-8">
          <div className="space-y-4">
            <h1 className="font-bold text-xl text-nowrap">Get In Touch.</h1>
            <div className="flex gap-3">
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
          </div>
          <div className="w-[200px]">
            <p className="text-sm text-justify">"The only way to do great work is to love what you do."</p>
            <p className="text-sm text-end mt-3">— Steve Jobs</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-sm text-center">Made with ❤️️ by JC.</p>
          <p className="text-sm text-center">Copyright 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
