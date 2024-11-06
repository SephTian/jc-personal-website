import { motion, Variants } from 'framer-motion';
import { useStaggerFramer } from '../hooks/useStaggerFramer';
import ContactItem from './contact/ContactItem';
import SectionTitle from './UI/SectionTitle';
import { AiOutlineDiscord, AiOutlineLinkedin } from 'react-icons/ai';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { useFadeInUpFramer } from '../hooks/useFadeInUpFramer';

function Contact() {
  const [variantsStagger, hiddenStagger, visibleStagger]: [Variants, string, string] = useStaggerFramer();
  const [variantsFadeInUp, hiddenFadeInUp, visibleFadeInUp]: [Variants, string, string] = useFadeInUpFramer();

  return (
    <section id="contact" className="p-4 w-full pt-24">
      <header className="flex justify-center items-center gap-6 mb-12">
        <div className="h-1 bg-[#121212] flex-grow"></div>
        <SectionTitle title="Contact Me" />
      </header>
      <article className="">
        <motion.p variants={variantsFadeInUp} initial={hiddenFadeInUp} whileInView={visibleFadeInUp} viewport={{ once: true }} className="text-lg md:text-2xl text-center">
          "Connect with me through this platform."
        </motion.p>
        <motion.div variants={variantsStagger} initial={hiddenStagger} whileInView={visibleStagger} viewport={{ once: true }} className="flex justify-center gap-5 mt-10 flex-wrap">
          <motion.div variants={variantsFadeInUp}>
            <ContactItem isLink link="https://linkedin.com/in/joseph-christian-a5b299271" icon={<AiOutlineLinkedin className="h-6 w-6" />} title="Linked In" detail="Joseph Christian" />
          </motion.div>
          <motion.div variants={variantsFadeInUp}>
            <ContactItem isLink={false} link="" icon={<MdOutlineAttachEmail className="h-6 w-6" />} title="Email" detail="josephjcwork@gmail.com" />
          </motion.div>
          <motion.div variants={variantsFadeInUp}>
            <ContactItem isLink link="https://discordapp.com/users/343581363745718273" icon={<AiOutlineDiscord className="h-6 w-6" />} title="Discord" detail="sephtian" />
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}

export default Contact;
