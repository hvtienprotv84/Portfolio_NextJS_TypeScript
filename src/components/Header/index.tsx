/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useState } from 'react';
import { useSound } from 'hooks/useSound';
import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';

import logo from 'assets/logo_1.png';
import { MobileMenu } from 'components/MobileMenu';
import { SettingsContext } from 'contexts/SettingsContext';
import { propagationChildVariants } from 'variants/propagationChildVariants';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  Container,
  MainContainer,
  RightButtons,
  ConfigContainer,
} from './styles';
import texts from './text-content';

import EnImg from '../../assets/english.jpg';
import VNImg from '../../assets/vietnam.png';


import PopSound from '../../../public/pop_drip.mp3';
import ClickSound from '../../../public/click_04.mp3';

// eslint-disable-next-line react/require-default-props
export const Header = ({ isProjectsPage }: { isProjectsPage?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // prettier-ignore
  // eslint-disable-next-line max-len
  const { isSoundOn, language, handleToggleLanguage, handleToggleSound } = useContext(SettingsContext);

  const [playPop] = useSound(PopSound);
  const [playClick] = useSound(ClickSound);

  const settingsRef = useClickOutside(() => setIsSettingsOpen(false));

  function handleToggleMenu() {
    playPop();
    setIsMenuOpen((prevState) => !prevState);
  }

  function handleToggleSettings() {
    playPop();
    setIsSettingsOpen((prevState) => !prevState);
  }

  return (
    <Container as={motion.div} variants={propagationChildVariants}>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
          </a>
        </Link>
      </div>
      <MainContainer as={motion.div}>
        {!isProjectsPage && (
          <ul>
            {texts[language].listSections.map(({ title, targetSection }) => (
              <LinkScroll
                to={targetSection}
                smooth
                offset={-72}
                onClick={() => playClick()}
                key={title}
                spy
                href={targetSection}
              >
                <li className="list-item" onClick={() => playClick()}>
                  {title}
                </li>
              </LinkScroll>
            ))}
          </ul>
        )}
        <RightButtons>
          <Link href="/">
            <a href="/" target="_blank">
              <button
                type="button"
                className="resume-btn"
                onMouseEnter={() => playPop()}
                onClick={() => playClick()}
              >
                {texts[language].resumeButton}
              </button>
            </a>
          </Link>
          <ConfigContainer ref={settingsRef}>
            <button
              type="button"
              className="settings-icon-container"
              onClick={handleToggleSettings}
            >
              <AiOutlineSetting className="settings-icon" />
            </button>
            <motion.div
              className="settings"
              animate={{
                y: isSettingsOpen ? 0 : -24,
                opacity: isSettingsOpen ? 1 : 0,
                display: isSettingsOpen ? 'flex' : 'none',
              }}
            >
              <button
                type="button"
                onClick={handleToggleSound}
                className="sound-btn"
              >
                <motion.div
                  className="sound-icon-container"
                  animate={{ opacity: isSoundOn ? 1 : 0 }}
                >
                  <GiSoundOn className="sound-icon" />
                </motion.div>
                <motion.div
                  className="sound-icon-container"
                  animate={{ opacity: isSoundOn ? 0 : 1 }}
                >
                  <GiSoundOff className="sound-icon" />
                </motion.div>
              </button>
              <button
                type="button"
                className="language-container"
                onClick={handleToggleLanguage}
              >
                <div className="lang-img">
                  <motion.div
                    animate={{ opacity: language === 'pt' ? 1 : 0 }}
                    className="img"
                  >
                    <Image src={VNImg} layout="fill" alt="portuguese-pt" />
                  </motion.div>

                  <motion.div
                    animate={{ opacity: language === 'en' ? 1 : 0 }}
                    className="img"
                  >
                    <Image src={EnImg} layout="fill" alt="english-en" />
                  </motion.div>
                </div>
              </button>
            </motion.div>
          </ConfigContainer>
        </RightButtons>
      </MainContainer>

      {/* MOBILE COMPONENTS */}
      <div className="menu-btns-container" onClick={() => handleToggleMenu()}>
        {!isMenuOpen && <CgMenuRight className="icon" />}
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Container>
  );
};
