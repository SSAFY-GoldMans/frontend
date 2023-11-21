import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { StationInfoType, StationMapInfoType } from '@/@types/metro';
import { requestStationInfo } from '@/apis/request/metro';
import { BUILDING, SALES } from '@/constants/building';
import MainLeftSide from '@/components/MainLeftSide';
import KakaoMap from '@/components/KakaoMap';
import MainRightSide from '@/components/MainRightSide';

import * as S from './index.styled';
import { StationInfoRequest, StationInfoResponse } from '@/@types/apis/metro';

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
  const [searchParam] = useSearchParams();
  /* 집 옵션 */
  const [building, setBuilding] = useState<string>('');
  const [type, setType] = useState<string>('');

  const getQueryParams = () => {
    setBuilding(searchParam.get('building') ?? BUILDING.APT);
    setType(searchParam.get('type') ?? SALES.JEONSE);
    setTime(parseInt(searchParam.get('time') ?? '1000'));
    setQuery(searchParam.get('query') ?? '역삼역');
  };

  /* 검색 옵션 */
  const [time, setTime] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const temp: number = Number.parseInt(e.target.value.slice(0, 2));

    setTime(isNaN(temp) ? 0 : temp);
  };
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  /* Filter 옵션 */
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

  /* 역 정보 조회 API */
  const [stationInfo, setStationInfo] = useState<StationInfoResponse[]>([]);
  const fetchStationInfo = (req: StationInfoRequest) => {
    if (req.building === '' || req.type === '') {
      // 잘못된 요청을 방지
      return;
    }
    requestStationInfo(req)
      .then(res => {
        setStationInfo(res.data.body);
        console.log(res.data.body);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => console.log(req));
  };

  useEffect(() => {
    getQueryParams();
  }, []);

  useEffect(() => {
    const req: StationInfoRequest = {
      name: query,
      time,
      building: building.toLocaleUpperCase(),
      type: type.toLocaleUpperCase(),
    };
    fetchStationInfo(req);
  }, [query, time, type, building]);

  useEffect(() => {
    console.log('추후 지도와 집 목록 조회 API 구현');
  }, [fee, rent, area]);

  useEffect(() => {
    console.log('수정');
  }, [window.location.href]);

  const goSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // TODO: API 조회기능 구현
      console.log(`${query} + ${time} + ${building} + ${type}`);
    }
  };

  return (
    <S.Container>
      <S.LeftWrapper>
        <MainLeftSide stationInfo={stationInfo} />
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
        handleQueryChange={handleQueryChange}
        handleTimeChange={handleTimeChange}
        goSearch={goSearch}
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
