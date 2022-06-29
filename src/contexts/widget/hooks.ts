import { useContext } from 'react';
import { WidgetContext } from './context';
import { WidgetContextValues } from './types';

export const useWidget = (): WidgetContextValues => {
  return useContext<WidgetContextValues>(WidgetContext);
}
