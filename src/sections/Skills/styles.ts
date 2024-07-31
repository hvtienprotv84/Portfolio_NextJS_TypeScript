import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SkillsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  margin-top: -2.4rem;

  @media (max-width: 468px) {
    gap: 1.6rem;
  }

  .arrow-icon {
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    transition: transform 0.2s ease-in;

    &:nth-child(1) {
      transform: rotate(90deg);

      &:hover {
        transform: rotate(90deg) scale(1.1);
      }

      &:active {
        transform: rotate(90deg) scale(0.9);
      }
    }

    &:nth-child(3) {
      transform: rotate(-90deg);

      &:hover {
        transform: rotate(-90deg) scale(1.1);
      }

      &:active {
        transform: rotate(-90deg) scale(0.9);
      }
    }
  }

  .skills-cards-container {
    flex: 1;
    display: flex;
    gap: 4.8rem;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: visible;
    height: 16.4rem;

    @media (max-width: 768px) {
      height: 30rem;
    }

    @media (max-width: 468px) {
      gap: 3.2rem;
    }
  }
`;
