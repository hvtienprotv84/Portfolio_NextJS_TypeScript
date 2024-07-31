import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000050;
  display: none;
  z-index: 99999999;

  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export const Container = styled.aside`
  display: none;
  flex-direction: column;
  padding: 3.2rem;
  width: 75vw;
  height: 100vh;
  background: #003459;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  .close-icon {
    font-size: 3.2rem;
    align-self: flex-end;
    color: #fff;
  }

  ul {
    margin-top: 6.4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .list-item {
      color: #fff;
      font-size: 2.4rem;
      font-weight: 700;
      padding: 1.2rem 0.8rem;
      border-bottom: 1px solid #014676;
      transition: color 0.2s ease-in;

      &:hover {
        color: #00a8e8;
      }
      @media (max-width: 468px) {
        font-size: 2rem;
      }
    }
  }

  .resume-btn {
    background: none;
    margin-top: 3.6rem;
    align-self: flex-start;
    font-size: 1.7rem;
    font-weight: 700;
    border: 1.5px solid #00a8e8;
    border-radius: 0.2rem;
    padding: 0.6rem 1.4rem;
    color: #fff;
  }
`;

export const ConfigContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.8rem;
  margin-top: 3.2rem;
  z-index: 999;

  button {
    background: none;
  }

  .settings-icon-container {
    display: flex;

    .settings-icon {
      font-size: 3rem;
      color: #fff;
      transition: color 0.2s ease-in;

      &:hover {
        color: #adb5bd;
        cursor: pointer;
      }
    }
  }

  .settings {
    position: absolute;
    left: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1.6rem;
    width: auto;
    padding: 0.8rem 1.6rem;
    background: #00171f;
    border-radius: 0.2rem;
    z-index: 40;
    margin-left: 1.6rem;

    .sound-btn {
      position: relative;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;

      .sound-icon-container {
        width: 100%;
        height: 100%;
        position: absolute;

        .sound-icon {
          font-size: 3rem;
          color: #fff;
        }
      }
    }

    .lang-img {
      position: relative;
      height: 2.2rem;
      width: 3rem;
      background: #00171f;
      display: flex;
      align-items: center;

      .img {
        position: absolute;
        width: 100%;
        height: 100%;

        img {
          opacity: 0.75;
          object-fit: cover;
        }
      }
    }
  }
`;
