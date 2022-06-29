import { Container } from '../../../Container';
import { Button } from '../../../Button';
import React, { FC } from 'react';

type ToolbarProps = {
  onClose: () => void;
  onSave: () => void
}

export const Toolbar: FC<ToolbarProps> = ({onClose, onSave}) => {

  return (
    <>
      <br/>
      <Container>
        <Button key="save-button" onClick={onSave}>Сохранить</Button>
        <Button key="cancel-button" onClick={onClose}>Отмена</Button>
      </Container>
    </>
  );
}
