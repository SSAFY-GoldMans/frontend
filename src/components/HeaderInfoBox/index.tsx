import { HeaderInfoType } from '@/@types/header';

import * as S from './index.styled';
import { useState } from 'react';

function HeaderInfoBox({ title, comment, optionType }: HeaderInfoType) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <S.Container>
      <S.BuildingInfoWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <S.BuildingInfoHeader>{title}</S.BuildingInfoHeader>
        <S.BuildingInfoComment>{comment}</S.BuildingInfoComment>
      </S.BuildingInfoWrapper>
      {/* 경로 Path */}
      <S.PathWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ display: isHovered ? 'block' : 'none' }}
      >
        {optionType.map((option, index: number) => (
          <S.PathInfo key={index}>
            <S.PathComment>{option.title}</S.PathComment>
          </S.PathInfo>
        ))}
      </S.PathWrapper>
    </S.Container>
  );
}

export default HeaderInfoBox;
