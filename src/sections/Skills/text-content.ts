interface DataProps {
  title: string;
  skills: { text: string }[];
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    title: 'Skills',
    skills: [
      {
        text: 'Desenvolvimento de interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: "Grande experiência em consumo de API's",
      },
      {
        text: 'Construção de layouts responsivos e acessíveis',
      },
      {
        text: 'Experiência com diversas formas de estilização no React',
      },
      {
        text: 'Experiência com diferentes gerenciadores de estado no React',
      },
      {
        text: 'Implementação de animações nas aplicações',
      },
      {
        text: 'Conhecimento em técnicas de Clean Code',
      },
    ],
  },
  en: {
    title: 'Kỹ Năng',
    skills: [
      {
        text: 'Development of highly dynamic interfaces with great performance',
      },
      {
        text: "Large experience in API's consume",
      },
      {
        text: 'Accessibles and responsives layout development',
      },
      {
        text: 'Experience with different ways to style React Apps',
      },
      {
        text: 'Experience with distinct React state managers',
      },
      {
        text: 'Efficiency in animating React applications',
      },
      {
        text: 'Clean Code techniques knowledge',
      },
    ],
  },
};

export default textContent;
