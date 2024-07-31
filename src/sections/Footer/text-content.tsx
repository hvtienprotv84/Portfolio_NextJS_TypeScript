interface DataProps {
  text: any;
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    text: (
      <>
        &copy; All rights reserved <b>Huỳnh Vĩnh Tiến</b>
      </>
    ),
  },
  en: {
    text: (
      <>
        &copy; Mọi Bản Quyền Thuộc Về <b>Huỳnh Vĩnh Tiến</b>
      </>
    ),
  },
};

export default textContent;
