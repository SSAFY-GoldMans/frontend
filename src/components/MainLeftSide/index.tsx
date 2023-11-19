import { StationInfoType } from '@/@types/metro';
import StationInfo from '../StationInfo';

import * as S from './index.styled';

function MainLeftSide() {
  const stationInfo: StationInfoType[] = [
    {
      name: '역삼역',
      address: '강남구 역삼동',
      time: 3,
      minPrice: '1300만원',
      maxPrice: '1.12억원',
      totalCount: 120,
    },
  ];

  return (
    <S.Container>
      {stationInfo.map((info, index: number) => (
        <StationInfo key={index} {...info} />
      ))}
    </S.Container>
  );
}

export default MainLeftSide;
