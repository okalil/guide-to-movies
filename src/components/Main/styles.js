import styled from 'styled-components';
import Box from '../Box';

export const ResultsItem = styled(Box).attrs({ as: 'li' })`
  display: flex;

  border-radius: 7px;
  height: 9rem;

  & + & {
    margin-top: 1rem;
  }

  img {
    width: 95px;
    max-height: 100%;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  box-shadow: 0px -2px 3px 1px #00000012, 0px 3px 3px 1px #00000012;
  padding: 1rem 0.75rem;

  > :nth-child(2) {
    font-weight: 400;
    color: #c5c5c5;
  }
  > :nth-child(3) {
    margin-top: auto;
    max-height: 50%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
