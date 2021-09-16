import styled from 'styled-components';

export const Row = styled.span``;

export const Filter = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background: #f5f5f5;
  }

  span:first-child {
    cursor: pointer;
  }
  span:nth-child(2) {
    background: #ffffff;
    border-radius: 100%;
    padding: 5px;
    text-align: center;
    width: 2rem;
  }
`;
