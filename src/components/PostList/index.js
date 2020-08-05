import React from 'react';

import PostItem from '../PostItem';

import * as S from './styled';

const PostList = () => {
  return (
    <S.PostListWrapper>
      <S.PostListTitle>Posts</S.PostListTitle>
      <S.PostListItem>
        <PostItem />
      </S.PostListItem>
    </S.PostListWrapper>
  );
};

export default PostList;
