import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15.6rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1720px;
  padding: 0 6.4rem;
  position: relative;

  margin-bottom: 32px;

  @media (max-width: 768px) {
    padding: 0 3.2rem;
    gap: 9.6rem;
    overflow-x: hidden;
  }
`;
