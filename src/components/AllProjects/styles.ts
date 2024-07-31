import styled from 'styled-components';

export const ContainerHeader = styled.div`
    position: absolute;
    margin-top: -110px;
`;

export const Container = styled.div`
  color: #fff;
  padding: 0 6.4rem;

  @media (max-width: 768px) {
    padding: 0 3.2rem;
  }

  .results-text {
    margin-top: 2.4rem;
    margin-bottom: -3.2rem;
    color: #ced4da;
  }
`;

export const Projects = styled.section`
  margin-top: calc(9.6rem);
  display: flex;
  flex-direction: column;
  gap: 9.6rem;
  margin-bottom: 9.6rem;

  .not-found {
    font-size: 3.2rem;
    font-weight: 700;
    margin-top: -1.6rem;
    align-self: center;
  }
`;
