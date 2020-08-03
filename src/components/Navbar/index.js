import React from 'react';

// import { Home } from 'styled-icons/entypo/';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Home } from '@styled-icons/boxicons-regular/Home';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ListUl } from '@styled-icons/boxicons-regular/ListUl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MoreHorizontal as More } from '@styled-icons/evaicons-solid/MoreHorizontal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Lightbulb } from '@styled-icons/fa-solid/Lightbulb';

import * as S from './styled';

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarContent>
        <S.NavbarIconWrapper>
          <Home />
        </S.NavbarIconWrapper>

        <S.NavbarIconWrapper>
          <ListUl />
        </S.NavbarIconWrapper>

        <S.NavbarIconWrapper>
          <More />
        </S.NavbarIconWrapper>

        <S.NavbarIconWrapper>
          <Lightbulb />
        </S.NavbarIconWrapper>
      </S.NavbarContent>
    </S.NavbarWrapper>
  );
};

export default Navbar;
