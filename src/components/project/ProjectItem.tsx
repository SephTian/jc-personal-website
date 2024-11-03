import { RiArrowRightLine } from 'react-icons/ri';

type Props = {
  link: string;
  image: string;
  stacks: string[];
  title: string;
};

function ProjectItem({ link, image, stacks, title }: Props) {
  return (
    <a target="_blank" href={link} className="group cursor-pointer relative block bg-customGray border border-customBlack  rounded-sm shadow-div">
      <div className="border-b border-customBlack w-full h-[200px]">
        <img className="object-cover object-top w-full h-full" src={image} alt="web image" />
      </div>
      <div className="pb-3 px-2 space-y-2">
        <p className="text-lg">{title}</p>
        <div className="flex gap-2 items-center">
          <span className="pr-2 border-r-2 border-customBlack font-bold">Stack</span>
          {stacks.map((stack) => {
            return (
              <img
                key={stack}
                className="rounded-[10px] hover:translate-x-1 hover:translate-y-1 hover:shadow-none border border-customBlack overflow-clip h-8 w-8"
                src={`https://skillicons.dev/icons?i=${stack}`}
              />
            );
          })}
        </div>
      </div>
      <div className="transition-width ease-in-out duration-200 absolute top-0 left-0 h-full w-0 group-hover:bg-black/70 group-hover:w-full flex justify-center items-center gap-2 overflow-hidden">
        <RiArrowRightLine className="h-5 w-5 text-customWhite" />
        <p className="text-customWhite">View Site</p>
      </div>
    </a>
  );
}
export default ProjectItem;
