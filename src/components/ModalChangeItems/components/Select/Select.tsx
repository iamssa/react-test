import React, { FC } from 'react';
import { useWidget } from '../../../../contexts/widget/hooks';

export const Select: FC = () => {
  const {setFilterValue} = useWidget();
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(Number(e.target.value));
  }

  return (
    <select onChange={onChangeHandler}>
      <option value="0">Без фильтра</option>
      <option value="10">Номер больше 10</option>
      <option value="100">Номер больше 100</option>
      <option value="200">Номер больше 200</option>
    </select>
  );
}
