import React, { FC, useState } from 'react';
import { ButtonWithCross } from '../../components/ButtonWithCross';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { ModalChangeItems } from '../../components/ModalChangeItems';
import { useWidget } from '../../contexts/widget/hooks';
import { removeItemFromArray } from '../../helpers/transformArray';

export const Widget: FC = () => {
  const {selectedItems, setSelectedItems} = useWidget();
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);

  const removeHandler = (index: number) => {
    setSelectedItems(removeItemFromArray(selectedItems, index));
  }
  const openModalHandler = () => {
    setModalOpen(true);
  }

  return (
    <>
      <h2>Выбор элементов</h2>
      <Container>
        {!selectedItems.length && <>Have no items</>}
        {selectedItems.map((item, index) => (
          <ButtonWithCross key={item.id} onClick={() => removeHandler(index)}>{item.name}</ButtonWithCross>
        ))}
      </Container>
      <br/>
      <Button onClick={openModalHandler}>Изменить мой выбор</Button>
      <ModalChangeItems modalState={modalIsOpen} setModalState={setModalOpen} />
    </>
  );
}
