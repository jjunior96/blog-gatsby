import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: var(--color-background);
  border-top: 1px solid var(--color-header-shadow);
`;

export const NavbarContent = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarIconWrapper = styled.div`
  width: 2rem;
  overflow: hidden;
  color: var(--color-navitem-disabled);
  border-radius: 50px;

  &:last-child {
    /* margin-left: 2rem; */
  }
`;
