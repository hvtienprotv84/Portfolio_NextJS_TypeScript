interface DataProps {
  mainInfos: {
    uptitle: string;
    name: string;
    subtitle: string;
    description: string;
  };
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    mainInfos: {
      uptitle: 'Hi, My Name is',
      name: 'Huỳnh Vĩnh Tiến',
      subtitle: 'Software Engineer',
      description:
        'Currently, I am living and working in Viet Nam',
    },
  },
  en: {
    mainInfos: {
      uptitle: 'Xin Chào, Tôi Tên Là',
      name: 'Huỳnh Vĩnh Tiến',
      subtitle: 'Kỹ Sư Phần Mềm',
      description:
        'Hiện Tại Tôi Đang Sinh Sống và Làm Việc Tại Việt Nam',
    },
  },
};

export default textContent;
