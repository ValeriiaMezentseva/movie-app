import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 4;

  background-color: rgba(0, 0, 0, 0.1);

  animation: ${fadeIn} 0.3s ease-in; /* Add fade-in animation */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 23px;
  right: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background-color: transparent;

  border: none;
  outline: none;

  cursor: pointer;

  svg {
    fill: red;
  }

  transition: transform 0.3s ease-in-out; 

  &:hover {
    transform: scale(1.2);
  }
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 0.3s ease-in;

  border-radius: 8px;
  overflow-y: auto;
  z-index: 5;
`;
