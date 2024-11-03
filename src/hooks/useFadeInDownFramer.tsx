import { Variants } from 'framer-motion';

const useFadeInDownFramer = (): [Variants, string, string] => {
  const variants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const hidden = 'hidden';
  const visible = 'visible';

  return [variants, hidden, visible];
};

export { useFadeInDownFramer };
