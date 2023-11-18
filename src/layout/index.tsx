import React from 'react';

import Header from '@/pages/Header';
import Footer from '@/pages/Footer';

import * as S from './index.styled';

interface PageProps {
  children: React.ReactNode;
}

function Layout({ children }: PageProps) {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  );
}

export default Layout;
