import styled from 'styled-components';

export const PostListWrapper = styled.main`
  width: 100%;
  height: 90vh;
  /* background-color: #aaa; */
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const PostListItem = styled.section`
  margin: 2rem;
`;

export const PostListTitle = styled.h1`
  margin: 2rem;

  font-size: 3.2rem;
  color: var(--color-header-title);
`;
