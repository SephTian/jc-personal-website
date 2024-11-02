import ProjectItem from './project/ProjectItem';
import SectionTitle from './UI/SectionTitle';

function Project() {
  return (
    <section id="project" className="p-4 w-full pt-24">
      <header className="flex justify-center items-center gap-6 mb-12">
        <SectionTitle title="Project" />
        <div className="h-1 bg-[#121212] flex-grow"></div>
      </header>
      <article className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectItem link="youtube.com" image="/images/jc-personal-website.jpg" stacks={['react', 'tailwind']} title="JC. - Personal Website" />
      </article>
    </section>
  );
}

export default Project;
