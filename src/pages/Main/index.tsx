import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { SelectStationType, StationMapInfoType } from '@/@types/metro';
import { HouseInfoRequest, HouseInfoResponse } from '@/@types/apis/house';
import { StationInfoRequest, StationInfoResponse } from '@/@types/apis/metro';

import { requestHouseInfo } from '@/apis/request/house';
import { requestStationInfo } from '@/apis/request/metro';

import { BROWSER_PATH } from '@/constants/path';
import { BUILDING, SALES } from '@/constants/building';

import MainLeftSide from '@/components/MainLeftSide';
import KakaoMap from '@/components/KakaoMap';
import MainRightSide from '@/components/MainRightSide';
import Loading from '../Loading';

import * as S from './index.styled';

function Main() {
  const { kakao } = window;
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
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
  const fetchStationInfo = async (req: StationInfoRequest) => {
    if (req.building === '' || req.type === '') {
      return;
    }
    setLoading(true);
    await requestStationInfo(req)
      .then(res => {
        setStationInfo(res.data.body);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* FUNCTION: 최초 진입 후 쿼리 파싱 후 데이터 요청 */
  useEffect(() => {
    const req: StationInfoRequest = {
      name: query,
      time,
      building: building.toLocaleUpperCase(),
      type: type.toLocaleUpperCase(),
    };
    fetchStationInfo(req);
    changeSelectStation({ id: -1, name: req.name, time: `0분` });
  }, [type, building]);

  /* FUNCTION: 고정 필터 검색 기능 */
  const goSearch = () => {
    const req: StationInfoRequest = {
      name: query,
      time,
      building: building.toLocaleUpperCase(),
      type: type.toLocaleUpperCase(),
    };
    /* FUNCTION: 필터값을 유지하기 위함 */
    navigate(
      `${BROWSER_PATH.HOME}?query=${req.name}&time=${req.time}&building=${req.building}&type=${req.type}`,
    );
    fetchStationInfo(req);
  };

  /* STATE: 선택한 역의 정보, FUNCTION: 전달 받은 매개변수로 선택한 역의 정보 수정 */
  const [selectStation, setSelectStation] = useState<SelectStationType>({
    id: -1,
    name: '',
    time: '0분',
  });
  const changeSelectStation = ({ id, name, time }: SelectStationType) => {
    setSelectStation({
      id,
      name,
      time,
    });
  };

  /* TODO: 카카오 지하철 좌표 조회 */

  /* TODO: 카카오 집 좌표 조회 */
  type KakaoHouseMapRequest = {
    buildingType: string;
    rentType: string;
    stationName: string;
    price: {
      max: number;
      min: number;
    };
    rent: {
      max: number;
      min: number;
    };
    area: {
      max: number;
      min: number;
    };
  };
  type KakaoHouseMapResponse = {
    id: number; // 건물 Id
    name: string; // 건물 이름
    lng: number;
    lat: number;
  };

  /* STATE: 집 목록 */
  const [houseInfo, setHouseInfo] = useState<HouseInfoResponse[]>([]);

  /* API: 집 목록 조회 */
  const fetchHouseInfo = async (req: HouseInfoRequest) => {
    if (req.buildingType === '' || req.stationName === '') {
      return;
    }

    await requestHouseInfo(req)
      .then(res => {
        setHouseInfo(res.data.body.houseList);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  };

  /* FUNCTION: 집 목록 조회 */
  useEffect(() => {
    const req: HouseInfoRequest = {
      buildingType: building.toLocaleUpperCase(),
      rentType: type.toLocaleUpperCase(),
      stationName: selectStation.name,
      area: {
        min: area.at(0)!,
        max: area.at(1)!,
      },
      rent: {
        min: rent.at(0)!,
        max: rent.at(1)!,
      },
      fee: {
        min: fee.at(0)!,
        max: fee.at(1)!,
      },
    };
    fetchHouseInfo(req);
  }, [time, building, rent, fee, area, selectStation]);

  /* FUNCTION: 최초 진입시 쿼리 파싱 진행 및 역 선택 */
  useEffect(() => {
    getQueryParams();
  }, []);

  /* TODO: 중개업자 정보 상세 조회 */

  /* FUNCTION: 데이터를 호출하고 있을 경우 로딩창을 보여줌 */
  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.LeftWrapper>
        <MainLeftSide
          stationInfo={stationInfo}
          changeSelectStation={changeSelectStation}
        />
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
        stations={stationInfo}
        changeSelectStation={station => changeSelectStation(station)}
        houseInfo={houseInfo}
      />
      <S.RightWrapper>
        <MainRightSide
          houseInfo={houseInfo}
          fromStation={selectStation.name}
          toStation={query}
          time={selectStation.time}
        />
      </S.RightWrapper>
    </S.Container>
  );
}

export default Main;
