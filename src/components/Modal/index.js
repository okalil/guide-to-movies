import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay, ModalBox } from './styles';

function Modal({ children }, ref) {
  const [isServerSide, setIsServerSide] = useState(true);
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => setVisible(true), []);
  const closeModal = useCallback(() => setVisible(false), []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    };
  });

  useEffect(() => {
    setIsServerSide(false);
  }, []);

  /* No lado do servidor, o document é undefined. Assim, se em algum momento for necessário 
  iniciar uma página com o modal aberto, ele só vai ser renderizado no lado do cliente */
  if (isServerSide) return null;

  return visible
    ? ReactDOM.createPortal(
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={e => e.stopPropagation()}>{children}</ModalBox>
        </ModalOverlay>,
        document.getElementById('modal-root')
      )
    : null;
}

export default forwardRef(Modal);
