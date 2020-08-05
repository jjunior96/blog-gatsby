import React from 'react';

import Header from '../Header';
import PostList from '../PostList';
import Navbar from '../Navbar';
import GlobalStyles from '../../assets/styles/global';

import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header title="Junior Alves" />
      <PostList />
      <Navbar />
    </S.LayoutWrapper>
  );
};

export default Layout;
