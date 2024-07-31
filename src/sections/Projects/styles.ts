import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -9.6rem;

  .projects-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9.6rem;

    @media (max-width: 768px) {
      gap: 7.2rem;
    }
  }

  .see-more {
    margin-top: 9.6rem;
    border: 0.2rem solid #00a8e8;
    background: none;
    border-radius: 0.2rem;
    padding: 0.8rem 1.6rem;
    transition: background 0.25s ease-in;

    @media (max-width: 768px) {
      margin-top: 7.2rem;
    }

    a {
      color: #00a8e8;
      font-weight: 700;
      transition: color 0.25s ease-in;
    }

    &:hover {
      background: #00a8e8;
      color: #00171f;
    }

    &:hover a {
      color: #00171f;
    }
  }
`;
