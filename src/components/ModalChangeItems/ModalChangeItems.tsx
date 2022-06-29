import { Modal } from '../Modal';
import React, { FC, useEffect, useState } from 'react';
import { ContentWrapper } from './styled';
import { Toolbar } from './components/Toolbar';
import { FieldGroup } from './components/FieldGroup';
import { List } from './components/List';
import { Container } from '../Container';
import { ButtonWithCross } from '../ButtonWithCross';
import { WidgetItem } from '../../contexts/widget/types';
import { useWidget } from '../../contexts/widget/hooks';
import { Select } from './components/Select';
import { Search } from './components/Search';
import { removeItemFromArray } from '../../helpers/transformArray';

type ModalChangeItemsProps = {
  modalState: boolean;
  setModalState: (state: boolean) => void;
};

export const ModalChangeItems: FC<ModalChangeItemsProps> = ({modalState, setModalState}) => {
  const {showingItems, selectedItems, setSelectedItems, setSearchValue, setFilterValue} = useWidget();
  const [changedItems, setChangedItems] = useState<WidgetItem[]>(selectedItems);

  const removeHandler = (index: number) => {
    setChangedItems(removeItemFromArray(changedItems, index));
  }
  const clearStates = () => {
    setSearchValue('');
    setFilterValue(0);
  }
  const closeModalHandler = () => {
    setModalState(false);
    setChangedItems(selectedItems);
    clearStates()
  }
  const saveHandler = () => {
    setModalState(false);
    setSelectedItems(changedItems);
    clearStates();
  }

  useEffect(() => {
    setChangedItems(selectedItems);
  }, [selectedItems])

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = 'overlay';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalState]);

  return (
    <Modal
      state={modalState}
      setState={setModalState}>
      <ContentWrapper>
        <h2>Изменение элементов</h2>
        <FieldGroup label="Поиск">
          <Search />
        </FieldGroup>
        <FieldGroup label="Фильтр">
          <Select />
        </FieldGroup>

        <br/>

        <List
          showingList={showingItems}
          changedItems={changedItems}
          setChangedItems={setChangedItems}
        />

        <br/>

        <Container>
          {changedItems.map((item, index) => (
            <ButtonWithCross key={item.id} onClick={() => removeHandler(index)}>{item.name}</ButtonWithCross>
          ))}
        </Container>
        <Toolbar onSave={saveHandler} onClose={closeModalHandler} />
      </ContentWrapper>
    </Modal>
);
}
