import React from 'react';

import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GlobalStyles from '../../assets/styles/global';

import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header title="Junior Alves" />
      <Footer />

      <Navbar />
    </S.LayoutWrapper>
  );
};

export default Layout;
