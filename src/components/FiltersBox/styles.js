import styled from 'styled-components';

export const Title = styled.span`
  background: #42b4e2;
  color: #ffffff;
  display: block;
  font-weight: 600;
  padding: 0.75rem;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const Filter = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    background: #ebebeb;
  }

  span:nth-child(2) {
    background: #ffffff;
    border-radius: 100%;
    padding: 5px;
    text-align: center;
    width: 2rem;
    background: #ebebeb;
  }
`;
