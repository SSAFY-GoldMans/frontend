import { useState } from 'react';

import { SALES } from '@/constants/building';
import MainLeftSide from '@/components/MainLeftSide';
import KakaoMap from '@/components/KakaoMap';
import MainRightSide from '@/components/MainRightSide';

import * as S from './index.styled';
import { StationMapInfoType } from '@/@types/metro';

/* TODO: 추후 API로 삭제 */
const station: StationMapInfoType = {
  id: 1,
  name: '역삼역',
  lng: 127.036377,
  lat: 37.500643,
};

function Main() {
  const { kakao } = window;
  /* Filter 옵션 */
  const [type, setType] = useState<string>(SALES.JEONSE);
  const [fee, setFee] = useState<number[]>([0, 30]);
  const [rent, setRent] = useState<number[]>([0, 10]);
  const [area, setArea] = useState<number[]>([0, 40]);

  const handleFeeChange = (event: Event, newValue: number | number[]) => {
    setFee(newValue as number[]);
  };
  const handleRentChange = (event: Event, newValue: number | number[]) => {
    setRent(newValue as number[]);
  };
  const handleAreaChange = (event: Event, newValue: number | number[]) => {
    setArea(newValue as number[]);
  };
  const handleFilterReset = () => {
    setFee([0, 30]);
    setRent([0, 10]);
    setArea([0, 40]);
  };

  return (
    <S.Container>
      <S.LeftWrapper>
        <MainLeftSide />
      </S.LeftWrapper>
      <KakaoMap
        kakao={kakao}
        type={type}
        fee={fee}
        rent={rent}
        area={area}
        handleFeeChange={handleFeeChange}
        handleRentChange={handleRentChange}
        handleAreaChange={handleAreaChange}
        handleFilterReset={handleFilterReset}
        station={station}
      />
      <S.RightWrapper>
        <MainRightSide
          startStationName={'강남역'}
          nowStationName={'역삼역'}
          time={1}
        />
      </S.RightWrapper>
    </S.Container>
  );
}

export default Main;
