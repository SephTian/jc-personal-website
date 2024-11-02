import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
  link: string;
};

function Button({ children, className, link }: Props) {
  return (
    <a
      href={link}
      className={`${
        className || 'px-4 py-2 h-fit w-fit'
      } cursor-pointer transition-all duration-100 border border-[#121212] flex justify-center items-center rounded-sm shadow-button hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}
    >
      {children || 'Button'}
    </a>
  );
}

export default Button;
