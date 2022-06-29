import React, { FC, ReactNode } from 'react';
import { Container } from '../../../Container';
import { StyledLabel } from './styled';

type FieldGroupProps = {
  label: string;
  children: ReactNode;
}

export const FieldGroup: FC<FieldGroupProps> = ({label, children}) => {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      {children}
    </Container>
  );
}
