import { ReactNode } from 'react';

export type WidgetItem = {
  id: number;
  name: string;
};

export type WidgetContextValues = {
  generalList: WidgetItem[];
  showingItems: WidgetItem[];
  setSearchValue: (value: string) => void;
  setFilterValue: (value: number) => void;
  selectedItems: WidgetItem[];
  setSelectedItems: (item: WidgetItem[]) => void;
}

export type WidgetProviderProps = {
  children: ReactNode
}
