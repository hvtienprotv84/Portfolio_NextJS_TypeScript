interface DataProps {
  title: string;
  description: any;
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    title: 'Contact',
    description: (
      <>
        It is very important for the customer to follow
         the customer's training, but it is the same time the work.
        Email: <b>huynhvinhtien.84@gmail.com</b><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </>
    ),
  },
  en: {
    title: 'Liên Hệ',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et. 
        Email: <b>huynhvinhtien.84@gmail.com</b><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </>
    ),
  },
};

export default textContent;
