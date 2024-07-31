/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import { SectionTitle } from 'components/SectionTitle';
import { useSound } from 'hooks/useSound';
import { SettingsContext } from 'contexts/SettingsContext';
import { useContext } from 'react';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Container } from './styles';
import texts from './text-content';

import PopSound from '../../../public/pop_drip.mp3';
import ClickSound from '../../../public/click_04.mp3';

const socialMedias = [
  {
    icon: AiOutlineInstagram,
    url: '/',
  },
  {
    icon: FiGithub,
    url: '/',
  },
  {
    icon: FaLinkedinIn,
    url: '/',
  },
];

export const Contact = () => {
  const [playClick] = useSound(ClickSound);
  const [playPop] = useSound(PopSound);
  const { language } = useContext(SettingsContext);

  const { sectionRef, controls } = useScrollAnimation({});

  return (
    <Container
      id="contact"
      as={motion.section}
      ref={sectionRef}
      animate={controls}
    >
      <SectionTitle>{texts[language].title}</SectionTitle>
      <p className="description">{texts[language].description}</p>
      <div className="social-medias">
        {socialMedias.map(({ icon: Icon, url }, i) => (
          <Link href={url} key={i}>
            <a className="social-media">
              <Icon
                className="icon"
                onMouseEnter={() => playPop()}
                onClick={() => playClick()}
              />
            </a>
          </Link>
        ))}
      </div>
    </Container>
  );
};
