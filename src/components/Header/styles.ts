import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  width: 100%;
  max-width: 1450px;
  z-index: 999;
  position: fixed;
  left: 0;
  margin-left: 50px;

  .logo {
    height: 4.8rem;
    position: relative;
    width: 4.8rem;
    cursor: pointer;

    @media (max-width: 468px) {
      height: 3.6rem;
      width: 3.6rem;
    }
  }
  .menu-btns-container {
    z-index: 10;
    display: none;
    color: #fff;
    cursor: pointer;
    z-index: 20;

    @media (max-width: 768px) {
      display: inline-block;
      margin-right: 80px;
    }

    .icon {
      font-size: 3.2rem;
    }
  }
`;

export const MainContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .list-item {
    position: relative;
    font-size: 1.6rem;
    color: #fff;
    padding: 0 0.4rem;
    cursor: pointer;
    line-height: 1;
    font-weight: 700;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.8rem;
      right: 0;
      width: 0;
      height: 2px;
      background: #00a8e8;
      transition: all 0.25s ease-in;
      border-radius: 0.05rem;
    }

    &:hover {
      &::after {
        width: 100%;
        left: 0;
        right: auto;
      }
    }
  }
`;

export const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-left: 6.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }

  .resume-btn {
    background: transparent;
    border: 1.5px solid #00a8e8;
    padding: 0.6rem 1.2rem;
    color: #fff;
    font-size: 1.4rem;
    transition: all 0.25s ease-in;
    z-index: 9999;

    &:hover {
      background: #00a8e8;
    }
  }
`;

export const ConfigContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 3.8rem;

  button {
    background: none;
  }

  .settings-icon-container {
    display: flex;

    .settings-icon {
      font-size: 2.4rem;
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
    top: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    width: 100%;
    margin-top: 1.6rem;
    padding: 1.2rem 0.4rem;
    background: #003459;
    border-radius: 0.2rem;
    z-index: 999999;
    box-shadow: 0 0.2rem 0.8rem #00000050;

    .sound-btn {
      position: relative;
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      align-items: center;

      .sound-icon-container {
        width: 100%;
        height: 100%;
        position: absolute;
        .sound-icon {
          font-size: 2.4rem;
          color: #fff;
          margin-top: -0.2rem;
        }
      }
    }

    .lang-img {
      position: relative;
      height: 1.6rem;
      width: 2.4rem;
      background: #00171f;
      display: flex;
      /* align-items: center; */
      flex-direction: column;

      .img {
        padding: 9px;
        width: 100%;
        height: 100%;
        position: absolute;
      }

      img {
        opacity: 0.75;

        object-fit: cover;
      }
    }
  }
`;
