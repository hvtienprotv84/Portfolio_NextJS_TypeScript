import { createGlobalStyle } from 'styled-components';
import bg from '../assets/background.png';

const global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Courier Prime', monospace, sans-serif;
    box-sizing: border-box;
    font-size: 1.6rem;
    list-style: none;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    background: #fff;
  }

  input {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;

    ::-webkit-scrollbar {
      width: 1.3rem;
    }

    ::-webkit-scrollbar-track {
      background-color: #003459;
    }

    ::-webkit-scrollbar-thumb {
      background: #007EA7;
      box-shadow: 0 .2rem .8rem #00000030;
      border-radius: 99rem;

      &:hover {
        background: #00A8E8;
      }
  }

    @media (min-width: 1720px) {
      font-size: 12px;
    }

    @media (min-width: 2000px) {
      font-size: 15px;
    }

    @media (max-width: 968px) {
      font-size: 9px;
    }

    @media (max-width: 768px) {
      font-size: 8px;
    }

    @media (max-width: 300px) {
      font-size: 7px;
    }

    @media (max-width: 238px) {
      font-size: 6px;
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    max-width: 100vw;
    height: 100%;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
    background-image: url(${bg.src});
  }
`;

export default global;
