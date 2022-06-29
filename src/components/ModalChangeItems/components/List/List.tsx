import React, { FC } from 'react';
import { ListContainer } from './styled';
import { WidgetItem } from '../../../../contexts/widget/types';

type ListProps = {
  showingList: WidgetItem[];
  changedItems: WidgetItem[];
  setChangedItems: (value: WidgetItem[]) => void;
};

export const List: FC<ListProps> = ({
  showingList,
  changedItems,
  setChangedItems,
}) => {
  const onChangeHandler = (item: WidgetItem) => {
    if (changedItems.includes(item)) {
      const result = changedItems.filter((selected) => selected !== item)
      return setChangedItems(result);
    }

    if (!changedItems.includes(item)) {
      return setChangedItems([...changedItems, item]);
    }
  }

  if (!showingList || showingList.length === 0) {
    return (
      <ListContainer>
        Have no items
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {showingList.map((item) => (
        <span key={`list-item-${item.name}`}>
          <input
            disabled={changedItems.length === 3 && !changedItems.includes(item)}
            type="checkbox"
            id={`${item.id}-${item.name}`}
            value={item.id}
            key={`${item.id}-${item.name}`}
            checked={changedItems.includes(item)}
            onChange={() => onChangeHandler(item)}
          />
          <label htmlFor={`${item.id}-${item.name}`}>{item.name}</label>
        </span>
      ))}
    </ListContainer>
  );
}
