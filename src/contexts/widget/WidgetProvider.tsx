import React, { FC, useEffect, useState } from 'react';
import {WidgetContext} from './context';
import { WidgetItem, WidgetProviderProps } from './types';

export const WidgetProvider: FC<WidgetProviderProps> = ({children}) => {
  const initialGeneralList: WidgetItem[] = Array(301)
    .fill(null)
    .map((item, index) => ({id: index, name: `Элемент ${index}`}))
  const initialValues = initialGeneralList.slice(1, 4);
  const [selectedItems, setSelectedItems] = useState<WidgetItem[]>(initialValues);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<number>(0);
  const [showingItems, setShowingItems] = useState<WidgetItem[]>(initialGeneralList);

  useEffect(() => {
    if (!searchValue) {
      return setShowingItems(initialGeneralList.filter((item) => item.id > filterValue))
    }

    if (!filterValue) {
      return setShowingItems(initialGeneralList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())))
    }

    setShowingItems(initialGeneralList.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) && item.id > filterValue))
  }, [searchValue, filterValue])

  return (
    <WidgetContext.Provider value={{
      generalList: initialGeneralList,
      showingItems,
      setSearchValue,
      setFilterValue,
      selectedItems,
      setSelectedItems
    }}>
      {children}
    </WidgetContext.Provider>
  );
};
