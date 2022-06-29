import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Search } from '../../pages/Search';
import { Tags } from '../../pages/Tags';
import { Article } from '../../pages/Article';
import { Wrapper } from './styled';
import { Widget } from '../../pages/Widget';
import { Tabs } from '../Tabs';
import Modal from 'react-modal';
import { GlobalStyles } from '../../styled/global';

Modal.setAppElement('#root');

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Tabs/>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="tags" element={<Tags/>}/>
          <Route path="article" element={<Article/>}/>
          <Route path="widget" element={<Widget/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Wrapper>
    </>
  );
}
