import React, { FC, ReactNode } from 'react';
import { StyledButtonWithCross, Separator, Wrapper, StyledButton } from './styled';

export interface ButtonWithCrossProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonWithCross: FC<ButtonWithCrossProps> = ({children, ...props}) => {
  return (
    <StyledButtonWithCross>
      {children}
      <Wrapper>
        <Separator />
        <StyledButton {...props}>
          x
        </StyledButton>
      </Wrapper>
    </StyledButtonWithCross>
  );
}
