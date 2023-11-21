import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { requestStationInfo } from '@/apis/request/metro';
import { StationInfoRequest, StationInfoResponse } from '@/@types/apis/metro';
import { StationInfoType, StationMapInfoType } from '@/@types/metro';
import { BUILDING, SALES } from '@/constants/building';
import MainLeftSide from '@/components/MainLeftSide';
import KakaoMap from '@/components/KakaoMap';
import MainRightSide from '@/components/MainRightSide';

import * as S from './index.styled';
import Loading from '../Loading';

/* TODO: 추후 API로 삭제 */
const station: StationMapInfoType = {
  id: 1,
  name: '역삼역',
  lng: 127.036377,
  lat: 37.500643,
};

function Main() {
  const { kakao } = window;
  const [searchParam] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);

  /* STATE: 건물 옵션 */
  const [building, setBuilding] = useState<string>('');
  const [type, setType] = useState<string>('');

  /* FUNCTION: query param parsing */
  const getQueryParams = () => {
    setBuilding(searchParam.get('building') ?? BUILDING.APT);
    setType(searchParam.get('type') ?? SALES.JEONSE);
    setTime(parseInt(searchParam.get('time') ?? '1000'));
    setQuery(searchParam.get('query') ?? '역삼역');
  };

  /* STATE: 검색 옵션 */
  const [time, setTime] = useState<number>(0);
  const [query, setQuery] = useState<string>('');

  /* FUNCTION: 검색 옵션 데이터 가공 */
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const temp: number = Number.parseInt(e.target.value.slice(0, 2));

    setTime(isNaN(temp) ? 0 : temp);
  };
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  /* STATE: 검색 상세 옵션 */
  const [fee, setFee] = useState<number[]>([0, 30]);
  const [rent, setRent] = useState<number[]>([0, 10]);
  const [area, setArea] = useState<number[]>([0, 40]);

  /* FUNCTION: 검색 상세 옵션 데이터 수정 핸들러 */
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

  /* API: 역 정보 조회 */
  const [stationInfo, setStationInfo] = useState<StationInfoResponse[]>([]);
  const fetchStationInfo = (req: StationInfoRequest) => {
    if (req.building === '' || req.type === '') {
      return;
    }
    setLoading(true);
    requestStationInfo(req)
      .then(res => {
        setStationInfo(res.data.body);
        console.log(res.data.body);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        console.log(req);
      });
  };

  /* FUNCTION: 최초 진입시 쿼리 파싱 진행 */
  useEffect(() => {
    getQueryParams();
  }, []);

  /* FUNCTION: 최초 진입 후 쿼리 파싱 후 데이터 요청 */
  useEffect(() => {
    const req: StationInfoRequest = {
      name: query,
      time,
      building: building.toLocaleUpperCase(),
      type: type.toLocaleUpperCase(),
    };
    fetchStationInfo(req);
  }, [type, building]);

  useEffect(() => {
    console.log('추후 지도와 집 목록 조회 API 구현');
  }, [fee, rent, area]);

  /* FUNCTION: 고정 필터 검색 기능 */
  const goSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const req: StationInfoRequest = {
        name: query,
        time,
        building: building.toLocaleUpperCase(),
        type: type.toLocaleUpperCase(),
      };
      fetchStationInfo(req);
    }
  };

  /* TODO: 카카오 지하철 좌표 조회 */
  /* TODO: 카카오 집 좌표 조회 */
  /* TODO: 집 정보 조회 */
  /* TODO: 집 상세 정보 조회 */

  if (loading) {
    return <Loading />;
  }

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
