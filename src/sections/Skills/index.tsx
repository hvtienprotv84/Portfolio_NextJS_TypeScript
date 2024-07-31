/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

import { SkillCard } from 'components/SkillCard';
import ArrowIcon from 'assets/arrow.svg';
import { SettingsContext } from 'contexts/SettingsContext';
import { SectionTitle } from 'components/SectionTitle';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { Container, SkillsContainer } from './styles';
import texts from './text-content';

export const Skills = () => {
  const { language } = useContext(SettingsContext);
  const [skills, setSkills] = useState<any>(texts[language].skills);
  const controls = useAnimation();
  const { sectionRef, controls: scrollControls } = useScrollAnimation({});

  useEffect(() => {
    setSkills(texts[language].skills);
  }, [language]);

  // prettier-ignore
  function handleNextSkill() {
    const newSkills = [];
    for (let i = 0; i < skills.length - 1; i += 1) {
      /*
        In the first time this loop runs we put the LAST element of the original array in the
        FIRST element of the new array. The reason is because we are passing all the element to the
        next position, but the last needs to come back to the first one.
      */
      if (i === 0) {
        newSkills[0] = skills[skills.length - 1];
      }

      // Putting all the old values after the value that it was already putted in the code below.
      // This loop are not going to put the last element of the old array, because it was already
      // putted in the first element of the new array. And for that, the loops only runs
      // by the penultimate index of the original array.
      newSkills.push(skills[i]);
    }

    setSkills(newSkills);
  }

  // a b c d e
  function handleLastSkill() {
    const newSkills = [];
    for (let i = 0; i < skills.length - 1; i += 1) {
      // If the i is equal to 0, we put the next position of the original state
      // And with that we don't put the first value of the original state in first position of
      // new state. We will only put the first element of the original state in the last position
      // of the new state in the last time the loop runs.
      newSkills.push(skills[i + 1]);

      if (i === skills.length - 2) {
        newSkills[skills.length - 1] = skills[0];
      }
    }

    setSkills(newSkills);
  }

  return (
    <Container
      id="skills"
      as={motion.section}
      animate={scrollControls}
      ref={sectionRef}
    >
      <SectionTitle>{texts[language].title}</SectionTitle>
      <SkillsContainer>
        <div className="arrow-icon" onClick={() => handleNextSkill()}>
          <Image src={ArrowIcon} layout="fill" alt="arrow icon for come back" />
        </div>
        <motion.div
          className="skills-cards-container"
          animate={controls}
          layout
        >
          {skills.map(({ text }: any) => (
            <SkillCard text={text} key={text} />
          ))}
        </motion.div>
        <div className="arrow-icon" onClick={() => handleLastSkill()}>
          <Image
            src={ArrowIcon}
            layout="fill"
            alt="arrow icon to pass to next skill"
          />
        </div>
      </SkillsContainer>
    </Container>
  );
};
