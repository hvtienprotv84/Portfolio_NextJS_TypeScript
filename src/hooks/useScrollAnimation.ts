/* eslint-disable indent */
import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

interface Props {
  showAnimation?: {};
  hiddenAnimation?: {};
}

export const useScrollAnimation = ({
  showAnimation,
  hiddenAnimation,
}: Props) => {
  const sectionRef = useRef(null) as any;
  const controls = useAnimation();

  useEffect(() => {
    const sectionTop = sectionRef?.current.offsetTop;

    // prettier-ignore
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > sectionTop - window.innerHeight / 1.2) {
        controls.start(
          showAnimation
            ? showAnimation
            : {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 100 },
              },
        );
      } else {
        controls.start(
          hiddenAnimation
            ? hiddenAnimation
            : {
                opacity: 0,
                y: 48,
                transition: { type: 'spring', stiffness: 100 },
              },
        );
      }
    });
  }, []);

  return { sectionRef, controls };
};
