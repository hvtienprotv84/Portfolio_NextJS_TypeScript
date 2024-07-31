/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

interface Props {
  isLeft: boolean;
}

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ isLeft }) =>
    isLeft ? '1fr 1.25fr' : '1.25fr 1fr'};
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: calc(100% + 3.2rem);
    grid-column: ${({ isLeft }) => (isLeft ? '2 / 3' : '1 / 2')};
    grid-row: 1 / 2;
    background: #003459;
    border-radius: 0.2rem;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 30rem;
      width: 100%;
      grid-row: auto;
      grid-column: 1 / 2;
    }

    @media (max-width: 468px) {
      height: 20rem;
    }

    img {
      object-fit: cover;
      opacity: 0.25;
      transition: opacity 0.25s ease-in;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  .infos-container {
    display: flex;
    flex-direction: column;
    align-items: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
    grid-column: ${({ isLeft }) => (isLeft ? '1 / 2' : '2 / 3')};

    @media (max-width: 768px) {
      align-items: center;
      margin-top: 2.4rem;
      grid-column: 1 / 2;
    }
  }
`;

export const Uptitle = styled.p`
  font-size: 1.6rem;
  color: #00a8e8;
`;

export const Title = styled.h4`
  font-size: 3.2rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.25;
`;

export const DescContainer = styled.div<Props>`
  display: flex;
  justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
  align-items: center;
  padding: 2.4rem;
  min-height: 8rem;
  margin: 1.6rem 0;
  background: #003459;
  width: calc(100% + 4.8rem);
  z-index: 10;
  border-radius: 0.2rem;
  box-shadow: 0 0.4rem 0.4rem #00000010;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  p {
    color: #fff;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 0.8rem;
  }

  .tag {
    color: #adb5bd;
    line-height: 1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 1.6rem;
  gap: 1.6rem;

  .icon {
    font-size: 2.6rem;
    color: #adb5bd;
    cursor: pointer;
    transition: color 0.25s;
    &:hover {
      color: #fff;
    }
  }
`;
