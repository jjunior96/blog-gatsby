import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Home } from '@styled-icons/boxicons-regular/Home';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ListUl } from '@styled-icons/boxicons-regular/ListUl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MoreHorizontal as More } from '@styled-icons/evaicons-solid/MoreHorizontal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb';

// Luz apagada
// @styled-icons/heroicons-outline/LightBulb

import * as S from './styled';

const style = {
  color: '#242B35',
};

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarContent>
        <S.NavbarIconWrapper>
          <Home style={style} />
        </S.NavbarIconWrapper>

        <S.NavbarIconWrapper>
          <ListUl />
        </S.NavbarIconWrapper>

        <S.NavbarIconWrapper>
          <More />
        </S.NavbarIconWrapper>

        <S.NavbarIconWrapper>
          <LightBulb />
        </S.NavbarIconWrapper>
      </S.NavbarContent>
    </S.NavbarWrapper>
  );
};

export default Navbar;
