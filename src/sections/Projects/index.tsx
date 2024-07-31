/* eslint-disable react/no-array-index-key */
import Link from 'next/link';

import { Project } from 'components/Project';
import { SectionTitle } from 'components/SectionTitle';
import useSound from 'use-sound';
import { useContext } from 'react';
import { SettingsContext } from 'contexts/SettingsContext';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { motion } from 'framer-motion';

import { propagationContainerVariants } from 'variants/propagationContainerVariants';
import { propagationChildVariants } from 'variants/propagationChildVariants';
import { Container } from './styles';
import data from './text-content';
import PopSound from '../../../public/pop_drip.mp3';
import ClickSound from '../../../public/click_04.mp3';

export const Projects = () => {
  const [playPop] = useSound(PopSound);
  const [playClick] = useSound(ClickSound);
  const { language } = useContext(SettingsContext);

  const { sectionRef, controls } = useScrollAnimation({});

  return (
    <Container
      id="projects"
      ref={sectionRef}
      as={motion.section}
      animate={controls}
    >
      <SectionTitle>{data[language].title}</SectionTitle>
      <motion.div
        className="projects-container"
        variants={propagationContainerVariants}
        initial="hidden"
        animate="show"
      >
        {data[language].projects.map((project, i) => (
          <Project
            key={i}
            projectInfos={project}
            isLeft={i % 2 === 1}
            variants={propagationChildVariants}
            animate
          />
        ))}
      </motion.div>
      <button
        type="button"
        className="see-more"
        onMouseEnter={() => playPop()}
        onClick={() => playClick()}
      >
        <Link href="/projects">{data[language].seeMoreButton}</Link>
      </button>
    </Container>
  );
};
