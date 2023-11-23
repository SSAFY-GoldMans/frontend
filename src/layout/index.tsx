import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import * as S from './index.styled';

interface PageProps {
  children: React.ReactNode;
}

function Layout({ children }: PageProps) {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}

export default Layout;
