import styled from 'styled-components';

interface FilterOptionProps {
  isSelected: boolean;
}

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 11rem;
  height: 4.8rem;
  z-index: 999;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 4.8rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 468px) {
    height: 100%;
  }

  .title {
    font-size: 3.2rem;
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  height: 100%;

  @media (max-width: 468px) {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.2rem;
    width: 100%;
    height: auto; */
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

export const SearchContainer = styled.form`
  height: 100%;
  z-index: 9999;

  @media (max-width: 468px) {
    /* grid-column: 1 / 3;
    grid-row: 1 / 2; */
    width: 100%;
    height: 4.8rem;
  }

  .input-container {
    display: flex;
    background: #003459;
    align-items: center;
    height: 100%;
    padding: 0 1.6rem;
    border-radius: 0.2rem;

    transition: all 0.2s;

    &:focus-within {
      outline: 1px solid #00a8e8;
    }

    .search-icon {
      color: #e9ecef;
      font-size: 2rem;
    }

    input {
      width: 100%;
      background: none;
      border: 0;
      height: 100%;
      padding: 1.6rem 1.2rem;
      font-weight: 600;
      color: #e9ecef;

      &::placeholder {
        color: #ced4da;
      }
    }
  }
`;

export const OrderingContainer = styled.div`
  height: 100%;
  z-index: 9999;

  @media (max-width: 468px) {
    /* grid-column: 2 / 3;
    grid-row: 2 / 3; */
    flex: 1;
  }

  .order-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem;
    height: 100%;

    font-weight: 600;
    background: #003459;
    color: #e9ecef;
    height: 100%;
    width: 100%;
    border-radius: 0.2rem;

    @media (max-width: 468px) {
      height: 4.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .ordering-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background: #003459;
    margin-top: 0.8rem;
    padding: 0.8rem;
    border-radius: 0.2rem;
    box-shadow: 0 0.2rem 0.8rem #00000030;
    border: 1px solid #00a8e850;

    p {
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 0.2rem;

      &:hover {
        background: #007ea760;
      }
    }
  }
`;

export const FilteringContainer = styled.div`
  height: 100%;
  z-index: 9999;

  @media (max-width: 468px) {
    /* grid-column: 1 / 2;
    grid-row: 2 / 3; */
    flex: 1;
  }

  .filter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 0.8rem;
    height: 100%;
    width: 100%;
    font-weight: 600;
    background: #003459;
    color: #e9ecef;
    height: 100%;
    border-radius: 0.2rem;

    @media (max-width: 468px) {
      height: 4.8rem;
    }

    .circle {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 9999rem;
      background: #00a8e8;
      /* margin-left: -0.4rem; */
    }
  }

  .filtering-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background: #003459;
    margin-top: 0.8rem;
    padding: 0.8rem 0.8rem;
    border-radius: 0.2rem;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0.2rem 0.8rem #00000030;
    border: 1px solid #00a8e850;
  }
`;

export const FilterOption = styled.p<FilterOptionProps>`
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background: ${({ isSelected }) => (isSelected ? '#007ea7' : 'none')};

  &:hover {
    background: #007ea760;
  }
`;
