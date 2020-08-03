import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  max-width: 1200px;
  box-shadow: 0 4px 10px var(--color-header-shadow);
  background: var(--color-header);
  margin: 0 auto;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
`;

export const HeaderName = styled.h1`
  color: var(--color-header-title);
`;

export const HeaderImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  max-width: 5rem;
  max-height: 5rem;
  background-position: center;
  background-size: cover;
`;

export const HeaderImage = styled.img`
  width: 100%;
`;
