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

  animation: ${fadeIn} 0.3s ease-in; 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 30px; 

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
  width: 320px;
  max-width: 80%;
  max-height: 80%; 
  overflow-y: auto;
  z-index: 5;

        @media screen and (min-width: 480px) {
   width: 450px;
  }

     @media screen and (min-width: 678px) {
   width: 650px;
  }

  @media screen and (min-width: 940px) {
    width: 800px;
  }
`;