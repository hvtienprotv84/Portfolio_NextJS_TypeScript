import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    margin-top: -1.6rem;
    font-size: 1.8rem;
    color: #fff;
    text-align: center;
    max-width: 550px;
    color: #adb5bd;

    b {
      color: #00a8e8;
    }
  }

  .social-medias {
    display: flex;
    gap: 3.2rem;
    margin-top: 3.2rem;
    color: #adb5bd;

    .social-media {
      color: #adb5bd;

      .icon {
        font-size: 3.6rem;
        cursor: pointer;
        transition: all 0.25s ease-in;

        &:hover {
          color: #fff;
          transform: scale(1.1);
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;
