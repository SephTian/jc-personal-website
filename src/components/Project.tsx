import { motion, Variants } from 'framer-motion';
import ProjectItem from './project/ProjectItem';
import SectionTitle from './UI/SectionTitle';
import { useStaggerFramer } from '../hooks/useStaggerFramer';

function Project() {
  const [variants, hidden, visible]: [Variants, string, string] = useStaggerFramer();

  return (
    <section id="project" className="p-4 w-full pt-24">
      <header className="flex justify-center items-center gap-6 mb-12">
        <SectionTitle title="Project" />
        <div className="h-1 bg-[#121212] flex-grow"></div>
      </header>
      <motion.article variants={variants} initial={hidden} whileInView={visible} viewport={{ once: true }} className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectItem link="https://josephjc.vercel.app/" image="/images/jc-personal-website.jpg" stacks={['typescript', 'react', 'tailwind']} title="JC. - Personal Website" />
        <ProjectItem link="https://jc-world-thread-app.vercel.app/" image="/images/wtc.jpg" stacks={['react', 'tailwind']} title="World Thread Center" />
      </motion.article>
    </section>
  );
}

export default Project;
