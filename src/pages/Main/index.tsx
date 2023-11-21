import { useEffect, useState } from 'react';

import { StationInfoType, StationMapInfoType } from '@/@types/metro';
import { SALES } from '@/constants/building';
import MainLeftSide from '@/components/MainLeftSide';
import KakaoMap from '@/components/KakaoMap';
import MainRightSide from '@/components/MainRightSide';

import * as S from './index.styled';

/* TODO: 추후 API로 삭제 */
const station: StationMapInfoType = {
  id: 1,
  name: '역삼역',
  lng: 127.036377,
  lat: 37.500643,
};

/* TODO: 검색된 역 */
const info: StationInfoType[] = [
  {
    name: '역삼역',
    address: '강남구 역삼동',
    time: 3,
    minPrice: '1300만원',
    maxPrice: '1.12억원',
    totalCount: 120,
  },
];

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

  useEffect(() => {
    console.log('추후 지도와 집 목록 조회 API 구현');
  }, [fee, rent, area]);

  useEffect(() => {
    console.log('수정');
  }, [window.location.href]);
  return (
    <S.Container>
      <S.LeftWrapper>
        <MainLeftSide stationInfo={info} />
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
