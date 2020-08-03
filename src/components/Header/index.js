import React from 'react';

import HeaderImage from '../../assets/images/profile.png';

import * as S from './styled';

const Header = props => {
  const { title } = props;

  return (
    <S.HeaderWrapper>
      <S.HeaderNav>
        <S.HeaderName>{title}</S.HeaderName>
        <S.HeaderImageWrapper>
          <S.HeaderImage src={HeaderImage} alt="" />
        </S.HeaderImageWrapper>
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};

export default Header;
