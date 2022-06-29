import React, { FC } from 'react';
import { useWidget } from '../../../../contexts/widget/hooks';


export const Search: FC = () => {
  const {setSearchValue} = useWidget();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <input placeholder="Имя элемента" onChange={onChangeHandler}/>
    </>
  );
}
