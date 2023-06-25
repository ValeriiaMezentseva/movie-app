import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

import { Overlay, ModalWindow, CloseButton } from './Modal.styled';

function Modal({ children, state, stateFn }) {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        stateFn(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [state, stateFn]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      stateFn(false);
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseButton type="button" onClick={() => stateFn('closed')}>
          <IoClose size={25} />
        </CloseButton>
        {children}
      </ModalWindow>
      </Overlay>,
    document.querySelector('#modal')
  );
}; 

export default Modal; 