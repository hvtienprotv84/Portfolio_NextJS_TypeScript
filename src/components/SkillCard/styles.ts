import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 4.8rem);
  min-width: 45%;
  padding: 2.4rem;
  background: #fff;
  z-index: 1;
  transform-style: preserve-3d;
  text-align: center;

  @media (max-width: 468px) {
    min-width: 65%;
  }

  @media (max-width: 768px) {
    height: 20rem;
  }

  p {
    font-size: 1.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0.8rem;
    width: 100%;
    height: 100%;
    border: 0.2rem solid #00a8e8;
    /* z-index: -1; */
    transform: translateZ(-1px);
  }
`;
