import React, { FC, useState } from 'react';
import { Container, Item, SelectedItem } from './styled';

type SelectProps = {
  value: string;
  items: string[];
  onChange: (newValue: string) => void;
}

export const List: FC<SelectProps> = ({items, value, onChange}) => {
  const [isListOpen, setListOpen] = useState<boolean>(false);

  const openListHandler = () => {
    setListOpen(true);
  }
  const onChangeHandler = (newValue: string) => {
    onChange(newValue);
    setListOpen(false);
  }

  return (
    <Container>
      {isListOpen ?
        items.map((item) => (<Item key={item} isSelected={value === item} onClick={() => onChangeHandler(item)}>{item}</Item>)) :
        <SelectedItem onClick={openListHandler}>
          &#9776; {value}
        </SelectedItem>
      }
    </Container>
  );
}
