/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import { useSound } from 'hooks/useSound';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import {
  Container,
  Uptitle,
  Title,
  DescContainer,
  Buttons,
  Tags,
} from './styles';

import ClickSound from '../../../public/click_04.mp3';
import PopSound from '../../../public/pop_drip.mp3';

interface ProjectProps {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
}

interface Props {
  isLeft: boolean;
  projectInfos: ProjectProps;
  variants: any;
  animate?: boolean;
}

export const Project = ({ isLeft, projectInfos, variants, animate }: Props) => {
  const [playClick] = useSound(ClickSound);
  const [playPop] = useSound(PopSound);

  // prettier-ignore
  const { sectionRef, controls } = useScrollAnimation(animate ? {
    showAnimation: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 20,
        damping: 7,
      },
    },
    hiddenAnimation: {
      x: isLeft ? 100 : -100,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
      },
    },
  } : {});

  return (
    <Container
      isLeft={isLeft}
      as={motion.div}
      ref={sectionRef}
      variants={variants}
      initial={animate ? { x: isLeft ? 100 : -100 } : {}}
      animate={controls}
    >
      <div className="image-container" onMouseEnter={() => playPop()}>
        <Link href={projectInfos.projectURL || projectInfos.githubURL}>
          <a target="_blank">
            <Image
              src={projectInfos.imageSrc}
              layout="fill"
              alt="project-preview"
            />
          </a>
        </Link>
      </div>
      <div className="infos-container">
        <Uptitle>{projectInfos.uptitle}</Uptitle>
        <Title>{projectInfos.title}</Title>
        <DescContainer isLeft={isLeft}>
          <p className="description">{projectInfos.description}</p>
        </DescContainer>
        <Tags>
          {projectInfos.tags.map((tag) => (
            <p key={uuid()} className="tag">
              {tag}
            </p>
          ))}
        </Tags>
        <Buttons>
          <Link href={projectInfos.githubURL}>
            <a
              target="_blank"
              onClick={() => playPop()}
              onMouseEnter={() => playClick()}
            >
              <FiGithub className="icon" />
            </a>
          </Link>
          {projectInfos.projectURL && (
            <Link href={projectInfos.projectURL}>
              <a
                target="_blank"
                onClick={() => playPop()}
                onMouseEnter={() => playClick()}
              >
                <IoOpenOutline className="icon" />
              </a>
            </Link>
          )}
        </Buttons>
      </div>
    </Container>
  );
};
