import React, { FC, useState } from 'react';
import { Input } from '../../components/Input';
import SearchIcon from '../../assets/icons/search.png'
import ClearIcon from '../../assets/icons/cross.png';
import { Button } from '../../components/Button';
import { MediaContainer } from './styled';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');

  const clearHandler = () => {
    setValue('');
  }
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  return (
    <>
      <MediaContainer>
        <Input icon={SearchIcon} extraIcon={ClearIcon} value={value} onChange={onChangeHandler} extraHandler={clearHandler} />
        <Button>Найти</Button>
      </MediaContainer>
      <br/>
      <MediaContainer>
        <Input icon={SearchIcon} extraIcon={ClearIcon} value={value} onChange={onChangeHandler} extraHandler={clearHandler} />
        <Button>Go</Button>
      </MediaContainer>
      <br/>
      <MediaContainer>
        <Input icon={SearchIcon} extraIcon={ClearIcon} value={value} onChange={onChangeHandler} extraHandler={clearHandler} />
        <Button>Um mit der Suche zu beginnen</Button>
      </MediaContainer>
    </>
  );
}
