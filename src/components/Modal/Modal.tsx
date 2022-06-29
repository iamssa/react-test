import React, { FC, ReactNode } from 'react';
import { StyledModal } from './styled';

type ModalProps = {
  state: boolean;
  setState: (state: boolean) => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = ({state, setState, children}) => {
  const closeHandler = () => {
    setState(false);
  }
  return (
    <StyledModal isOpen={state} onRequestClose={closeHandler} style={{overlay: {backgroundColor: 'rgb(56 52 52 / 75%)'}}}>
      {children}
    </StyledModal>
  )
}
