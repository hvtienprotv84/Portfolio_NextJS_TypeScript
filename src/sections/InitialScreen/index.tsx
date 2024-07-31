import Image from 'next/image';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import { Header } from 'components/Header';
import { useSound } from 'hooks/useSound';
import arrow from 'assets/arrow.svg';
import { useContext } from 'react';
import { SettingsContext } from 'contexts/SettingsContext';

import { propagationContainerVariants } from 'variants/propagationContainerVariants';
import { motion } from 'framer-motion';
import { propagationChildVariants } from 'variants/propagationChildVariants';
import texts from './text-content';
import { Container, MainInfos } from './styles';
import PopSound from '../../../public/pop_drip.mp3';

export const InitialScreen = () => {
  const [playPop] = useSound(PopSound);
  const { language } = useContext(SettingsContext);

  return (
    <Container
      as={motion.section}
      variants={propagationContainerVariants}
      initial="hidden"
      animate="show"
    >
      <Header />
      <MainInfos as={motion.div} variants={propagationChildVariants}>
        <p className="uptitle">{texts[language].mainInfos.uptitle}</p>
        <h2 className="name">{texts[language].mainInfos.name}</h2>
        <h3 className="subtitle">{texts[language].mainInfos.subtitle}</h3>
        <p className="description">{texts[language].mainInfos.description}
          <img className="flag_vietnam" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png" alt="vietnam" />
        </p>
        <div className="arrow-icon">
          <Link
            to="projects"
            smooth="true"
            offset={-72}
            onClick={() => playPop()}
            href="#projects"
          >
            <Image src={arrow} layout="fill" alt="arrow" />
          </Link>
        </div>
      </MainInfos>
    </Container>
  );
};
