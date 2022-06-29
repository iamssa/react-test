import React, { FC } from 'react';
import { InputRelativeWrapper, StyledInput, Icon, IconWrapper } from './styled';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  extraIcon?: string;
  extraHandler?: () => void
}

export const Input: FC<InputProps> = ({icon, extraIcon, extraHandler, ...props}) => {
  return (
    <InputRelativeWrapper>
      <StyledInput
        haveIcon={!!icon}
        haveExtra={!!extraIcon}
        {...props}
      />
      {icon && (
        <IconWrapper iconAlign="left" >
          <Icon src={icon} alt="iconSearch" />
        </IconWrapper>
      )}
      {extraIcon && (
        <IconWrapper iconAlign="right" >
          <Icon src={extraIcon} alt="iconExtra" onClick={extraHandler} />
        </IconWrapper>
      )}
    </InputRelativeWrapper>
  );
}
