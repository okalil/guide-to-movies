import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: auto;
  width: min(90vw, 520px);
  max-height: 95vh;

  h2 {
    padding: 0.25rem 1rem 0;
  }
`;

export const Backdrop = styled.div`
  position: relative;
  height: 235px;
  width: 100%;

  img {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
`;
