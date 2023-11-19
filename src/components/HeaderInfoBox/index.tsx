import { useState } from 'react';

import { HeaderInfoType } from '@/@types/header';

import * as S from './index.styled';
import { useNavigate } from 'react-router-dom';

function HeaderInfoBox({ title, path, comment, optionType }: HeaderInfoType) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <S.Container>
      <S.BuildingInfoWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(path)}
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
