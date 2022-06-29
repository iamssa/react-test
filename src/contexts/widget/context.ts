import {createContext} from 'react';
import { WidgetContextValues } from './types';

export const WidgetContext = createContext<WidgetContextValues>({
  generalList: [],
  showingItems: [],
  setSearchValue: () => undefined,
  setFilterValue: () => undefined,
  selectedItems: [],
  setSelectedItems: () => undefined
});
