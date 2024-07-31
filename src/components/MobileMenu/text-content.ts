interface DataProps {
  listSections: { title: string; targetSection: string }[];
  resumeButton: string;
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  en: {
    listSections: [
      {
        title: 'Về Tôi',
        targetSection: 'about',
      },
      {
        title: 'Kỹ Năng',
        targetSection: 'skills',
      },
      {
        title: 'Dự Án',
        targetSection: 'projects',
      },
      {
        title: 'Liên Hệ',
        targetSection: 'contact',
      },
    ],
    resumeButton: 'Resume',
  },
  pt: {
    listSections: [
      {
        title: 'About',
        targetSection: 'about',
      },
      {
        title: 'Skills',
        targetSection: 'skills',
      },
      {
        title: 'Projects',
        targetSection: 'projects',
      },
      {
        title: 'Contact',
        targetSection: 'contact',
      },
    ],
    resumeButton: 'Resume',
  },
};

export default textContent;
