import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  overflow: auto;
  width: min(90vw, 520px);
  max-height: 95vh;
`;

export const Backdrop = styled.div`
  position: relative;
  height: 200px;
  width: 100%;

  img {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
`;

export const InlineInfo = styled.div`
  display: flex;
  position: relative;
  color: #525252;

  > span {
    font-weight: 600;
  }

  span + span {
    margin-left: 1rem;
  }
  span:last-child::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: #000;
    position: absolute;
    top: 50%;
    transform: translate(-235%, -50%);
  }
`;

export const Container = styled.div`
  padding: 0.25rem 1rem 0.5rem;

  ${[1, 2, 3, 4].map(
    n => `> :nth-child(${n}) {
        margin-bottom: 0.125rem;
      } `
  )}
`;
