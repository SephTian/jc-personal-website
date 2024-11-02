import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  color: string;
  link: string;
};

function PlatformButton({ children, color, link }: Props) {
  return (
    <a
      target="_blank"
      href={link}
      style={{ backgroundColor: `${color}` }}
      className={`cursor-pointer transition-all duration-100 aspect-square h-7 border border-[#121212] flex justify-center items-center rounded-sm shadow-button hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}
    >
      {children}
    </a>
  );
}

export default PlatformButton;
