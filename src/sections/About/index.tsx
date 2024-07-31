/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import Image from 'next/image';
// import ScrollReveal from 'utils/ScrollReveal';

import { SectionTitle } from 'components/SectionTitle';
import smileImg from 'assets/projects-images/about.png';
import { SettingsContext } from 'contexts/SettingsContext';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { Container, TextContainer, ImageContainer } from './styles';
import texts from './text-content';

export const About = () => {
  const { language } = useContext(SettingsContext);
  const { sectionRef, controls } = useScrollAnimation({});

  return (
    <Container
      id="about"
      ref={sectionRef}
      as={motion.section}
      initial={{ y: 32, opacity: 0 }}
      animate={controls}
    >
      <SectionTitle className="title">{texts[language].title}</SectionTitle>
      <div className="main-container">
        <TextContainer>
          {texts[language].mainText.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </TextContainer>
        <ImageContainer>
          <div className="image">
            <Image src={smileImg} layout="fill" alt="my-cartoon" />
          </div>
        </ImageContainer>
      </div>
      {/* <p>{texts.pt.mainText[2]}</p> */}
    </Container>
  );
};
