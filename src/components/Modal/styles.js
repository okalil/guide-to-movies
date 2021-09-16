import styled from 'styled-components';
import Box from '../Box';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled(Box)`
  margin: auto;
`;

export { ModalOverlay, ModalBox };
