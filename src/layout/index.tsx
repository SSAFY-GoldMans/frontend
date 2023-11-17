import React from 'react';

import * as S from './index.styled';

interface PageProps {
  children: React.ReactNode;
}

function Layout({ children }: PageProps) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}

export default Layout;
