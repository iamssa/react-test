import React, { FC, ReactNode } from 'react';
import { StyledButton, StyledLabel } from './styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children, ...props}) => {
  return (
    <StyledButton {...props}>
      <StyledLabel>{children}</StyledLabel>
    </StyledButton>
  );
}
