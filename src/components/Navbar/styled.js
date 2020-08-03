import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: var(--color-background);
  border-top: 1px solid var(--color-header-shadow);
`;

export const NavbarContent = styled.div`
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// export const NavbarIconsLeft = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const NavbarIconsRight = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const NavbarIconWrapper = styled.div`
  width: 3rem;
  overflow: hidden;
  color: #fff;
  /* border-radius: 50%; */

  &:last-child {
    margin-left: 2rem;
  }
`;
