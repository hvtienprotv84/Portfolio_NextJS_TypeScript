/* eslint-disable array-callback-return */
/* eslint-disable function-paren-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { motion } from 'framer-motion';

import { propagationContainerVariants } from 'variants/propagationContainerVariants';
import { SettingsContext } from 'contexts/SettingsContext';
import { Project } from 'components/Project';
// import { propagationChildVariants } from 'variants/propagationChildVariants';
import { Container, Projects, ContainerHeader} from './styles';
import data from './text-content';
import { SubHeader } from './SubHeader';

interface ProjectI {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
  date: any;
  complexity: 1 | 2 | 3;
}

export const AllProjects = () => {
  const { language } = useContext(SettingsContext);

  const [whichBtnIsActive, setWhichBtnIsActive] = useState('');

  // prettier-ignore
  const [projects, setProjects] = useState(data[language].projects as ProjectI[]);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState(data[language].orderOptions[0]);
  const [filters, setFilters] = useState([] as string[]);

  useEffect(() => {
    setProjects(data[language].projects);
  }, [language]);

  const searchedProjects = projects.filter(
    ({ title, uptitle, description }) => {
      const value = title + uptitle + description;
      return value.includes(search);
    }
  );

  const filteredProjects = searchedProjects.filter(({ tags }) =>
    filters.every((filter) => tags.includes(filter))
  );

  const orderedProjects = filteredProjects.sort((a, b) => {
    switch (order) {
      case 'Recentes': {
        return b.date - a.date;
      }
      case 'Recents': {
        return b.date - a.date;
      }
      case 'Antigos': {
        return a.date - b.date;
      }
      case 'Oldest': {
        return a.date - b.date;
      }
      case 'Complexidade': {
        return b.complexity - a.complexity;
      }
      case 'Complexity': {
        return b.complexity - a.complexity;
      }
      default:
        return a.complexity - b.complexity;
    }
  });

  return (
    <Container
      as={motion.div}
      variants={propagationContainerVariants}
      initial="hidden"
      animate="show"
    >
      <ContainerHeader>
      <Header isProjectsPage />
      </ContainerHeader>
      <SubHeader
        filters={filters}
        order={order}
        setFilters={setFilters}
        setOrder={setOrder}
        setWhichBtnIsActive={setWhichBtnIsActive}
        whichBtnIsActive={whichBtnIsActive}
        search={search}
        setSearch={setSearch}
      />
      {orderedProjects.length > 0 && (
        <p className="results-text">
          {orderedProjects.length} {data[language].resultsText}
        </p>
      )}
      <Projects as={motion.section}>
        {orderedProjects.length > 0 ? (
          orderedProjects.map((project, i) => (
            <Project
              projectInfos={project}
              isLeft={i % 2 === 1}
              variants={{}}
              key={i}
            />
          ))
        ) : (
          <p className="not-found">Không tìm thấy dự án nào!<br/>No projects found!</p>
        )}
      </Projects>
    </Container>
  );
};
