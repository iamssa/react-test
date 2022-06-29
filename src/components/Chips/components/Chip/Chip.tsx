import React, { FC, ReactNode } from 'react';
import { ActiveChip, TransparentChip } from './styled';

type ChipsProps = {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Chip: FC<ChipsProps> = ({isActive, children, onClick}) => {
  if (isActive) {
    return (
      <ActiveChip onClick={onClick}>
        {children}
      </ActiveChip>
    );
  }
  return (
    <TransparentChip onClick={onClick}>
      {children}
    </TransparentChip>
  );
}
