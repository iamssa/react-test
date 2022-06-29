import { Chip } from './components/Chip';
import React, { FC } from 'react';

type ChipsProps = {
  activeItem: string;
  items: string[];
  onChange: (newValue: string) => void
}

export const Chips: FC<ChipsProps> = ({items, activeItem, onChange}) => {
  return (
    <>
      {
        items.map((item) => (
          <Chip key={item} isActive={activeItem === item} onClick={() => onChange(item)}>
            {item}
          </Chip>
        ))
      }
    </>
  )
}
