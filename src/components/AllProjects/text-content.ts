import WeekPlannerImg from 'assets/projects-images/week-planner.png';
import FullImg from 'assets/projects-images/full.png';
import PomodoroImg from 'assets/projects-images/pomodoro.png';
import WeatherImg from 'assets/projects-images/weather.png';
import VueImg from 'assets/projects-images/vue.webp';
import KanbanImg from 'assets/projects-images/kanban.png';
import ReactImg from 'assets/projects-images/react.webp';
import ImCodeImg from 'assets/projects-images/imcode-landing.png';
import RestaurantImg from 'assets/projects-images/restaurant-app.png';
import MoneyImg from 'assets/projects-images/quiz.png';
import EventImg from 'assets/projects-images/angular.png';
import NuxtImg from 'assets/projects-images/nuxt.png';
import NextImg from 'assets/projects-images/next.webp';

interface Project {
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

interface Data {
  title: string;
  inputPlaceholder: string;
  projects: Project[];
  orderButton: string;
  filterButton: string;
  filters: string[];
  orderOptions: string[];
  resultsText: string;
}

interface Projects {
  pt: Data;
  en: Data;
}

const textContent: Projects = {
  en: {
    title: 'Dự Án',
    inputPlaceholder: 'Tìm một dự án...',
    orderButton: 'Sắp xếp theo:',
    filterButton: 'Bộ Lọc',
    resultsText: 'Dự án đã được tìm thấy',
    filters: [
      'ReactJS',
      'NextJS',
      'NuxtJS',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    orderOptions: ['Gần đây', 'Cũ nhất', 'Khó nhất'],
    projects: [
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án ReactJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [
          'ReactJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        complexity: 3,
        date: new Date('07-22-2022'),
        imageSrc: ReactImg,
      },
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án VueJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: [
          'VueJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: VueImg,
        complexity: 3,
        date: new Date('04-20-2022'),
      },
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án NextJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['NextJS', 'ReactJS', 'TypeScript', 'Tailwind CSS'],
        githubURL: '/',
        projectURL: '/',
        imageSrc: NextImg,
        complexity: 3,
        date: new Date('02-04-2022'),
      },
      {
        uptitle: 'Lập Trình Viên Full-Stack',
        title: 'Dự Án Full-Stack',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: [
          'ReactJS',
          'NodeJS',
          'ExpressJS',
          'MongoDB',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: FullImg,
        complexity: 3,
        date: new Date('04-03-2022'),
      },
      {
        uptitle: 'Lập Trình Viên Front-End',
        title: 'Dự Án NuxtJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: [
          'NuxtJS',
          'VueJS',
          'TypeScript',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: NuxtImg,
        complexity: 3,
        date: new Date('04-03-2022'),
      },
    ],
  },
  pt: {
    title: 'Projects',
    inputPlaceholder: 'Find a project...',
    orderButton: 'Order by',
    filterButton: 'Filters',
    resultsText: 'Projects was found',
    filters: [
      'ReactJS',
      'NextJS',
      'NuxtJS',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    orderOptions: ['Recents', 'Oldest', 'Complexity'],
    projects: [
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio ReactJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [
          'ReactJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        complexity: 3,
        date: new Date('07-22-2022'),
        imageSrc: ReactImg,
      },
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio VueJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: [
          'VueJS',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: VueImg,
        complexity: 3,
        date: new Date('04-20-2022'),
      },
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio NextJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['NextJS', 'ReactJS', 'TypeScript', 'Tailwind CSS'],
        githubURL: '/',
        projectURL: '/',
        imageSrc: NextImg,
        complexity: 3,
        date: new Date('02-04-2022'),
      },
      {
        uptitle: 'Full-Stack Developer',
        title: 'Portfolio Full-Stack',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: [
          'ReactJS',
          'NodeJS',
          'ExpressJS',
          'MongoDB',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: FullImg,
        complexity: 3,
        date: new Date('04-03-2022'),
      },
      {
        uptitle: 'Front-End Developer',
        title: 'Portfolio NuxtJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: [
          'NuxtJS',
          'VueJS',
          'TypeScript',
          'Tailwind CSS',
        ],
        githubURL: '/',
        projectURL: '/',
        imageSrc: NuxtImg,
        complexity: 3,
        date: new Date('04-03-2022'),
      },
    ],
  },
};

export default textContent;
