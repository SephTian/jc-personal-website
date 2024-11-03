import { Variants } from 'framer-motion';

const useStaggerFramer = (): [Variants, string, string] => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const hidden = 'hidden';
  const visible = 'visible';

  return [variants, hidden, visible];
};

export { useStaggerFramer };
