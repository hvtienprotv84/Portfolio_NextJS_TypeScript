import NextImg from 'assets/projects-images/next.webp';
import VueImg from 'assets/projects-images/vue.webp';
import FullImg from 'assets/projects-images/full.png';
import ReactImg from 'assets/projects-images/react.webp';

interface Project {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
}

interface Data {
  title: string;
  seeMoreButton: string;
  projects: Project[];
}

interface Projects {
  pt: Data;
  en: Data;
}

const textContent: Projects = {
  pt: {
    title: 'Projects',
    seeMoreButton: 'See More Projects',
    projects: [
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio ReactJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
        tags: [
          'ReactJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: ReactImg,
      },
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio VueJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.',
        tags: [
          'VueJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: VueImg,
      },
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio NextJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
        tags: ['ReactJS', 'NextJS', 'TypeScript', 'Tailwind CSS'],
        githubURL: '/',
        projectURL: '/',
        imageSrc: NextImg,
      },
      {
        uptitle: 'Full-Stack Developer',
        title: 'Portfolio Full-Stack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
        tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        githubURL: '/',
        projectURL: '/',
        imageSrc: FullImg,
      },
    ],
  },
  en: {
    title: 'Kỹ Năng',
    seeMoreButton: 'Xem Thêm Dự Án',
    projects: [
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án ReactJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
        tags: [
          'ReactJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: ReactImg,
      },
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án VueJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.',
        tags: [
          'VueJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: VueImg,
      },
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án NextJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
        tags: ['ReactJS', 'NextJS', 'TypeScript', 'Tailwind CSS'],
        githubURL: '/',
        projectURL: '/',
        imageSrc: NextImg,
      },
      {
        uptitle: 'Lập Trình Viên Full-Stack',
        title: 'Dự Án Full-Stack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
        tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
        githubURL: '/',
        projectURL: '/',
        imageSrc: FullImg,
      },
    ],
  },
};

export default textContent;
