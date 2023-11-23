import React, { useEffect, useState } from 'react';

import { StationInfoResponse } from '@/@types/apis/metro';
import { HouseInfoResponse } from '@/@types/apis/house';
import MetroStationImg from '@/assets/metro.png';
import { SelectStationType } from '@/@types/metro';
import HouseFilter from '../HouseFilter';

import * as S from './index.styled';
import { color } from '@/styles/colors';

interface Props {
  kakao: any;
  type: string;
  fee: number[];
  rent: number[];
  area: number[];
  handleFeeChange: (event: Event, newValue: number | number[]) => void;
  handleRentChange: (event: Event, newValue: number | number[]) => void;
  handleAreaChange: (event: Event, newValue: number | number[]) => void;
  handleFilterReset: () => void;
  handleTimeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  goSearch: () => void;
  stations: StationInfoResponse[];
  selectStation: SelectStationType;
  changeSelectStation: ({ id, name, time }: SelectStationType) => void;
  houseInfo: HouseInfoResponse[];
}

function KakaoMap({
  kakao,
  type,
  fee,
  rent,
  area,
  handleFeeChange,
  handleRentChange,
  handleAreaChange,
  handleFilterReset,
  handleQueryChange,
  handleTimeChange,
  goSearch,
  stations,
  selectStation,
  changeSelectStation,
  houseInfo,
}: Props) {
  /* 카카오 지도 API  */
  let map: any;

  const settingKakaoMapWithStation = async (idx: number) => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(
        stations.at(idx)?.lat,
        stations.at(idx)?.lng,
      ),
      level: 4,
    };
    map = await new kakao.maps.Map(container, options);
    /* FUNCTION: 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다. */
    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    map.setMaxLevel(6);
    let stationCircle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(
        stations.at(idx)?.lat,
        stations.at(idx)?.lng,
      ),
      radius: 800,
      strokeWeight: 2,
      strokeColor: color.yellow001,
      strokeOpacity: 1,
      strokeStyle: 'solid',
      fillColor: color.yellow001 + 20,
      fillOpacity: 0.7,
    });
    stationCircle.setMap(map);
    drawStationMarker(stations, stationCircle);
    drawHouseMarker(houseInfo);
  };

  /* FUNCTION: 지하철 역의 마커를 그린다  */
  const drawStationMarker = async (
    stations: StationInfoResponse[],
    stationCircle: any,
  ) => {
    var markerImage = await new kakao.maps.MarkerImage(
      MetroStationImg,
      new kakao.maps.Size(33, 33),
    );
    stations.forEach((station: StationInfoResponse, idx: number) => {
      const markerPosition = new kakao.maps.LatLng(station.lat, station.lng);
      const stationMarker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true,
        image: markerImage,
      });
      kakao.maps.event.addListener(stationMarker, 'click', function () {
        map.panTo(markerPosition);
        selectStationByMarker(idx, station, stationCircle);
      });
      stationMarker.setMap(map);
    });
  };

  /* FUNCTION: 선택한 마커의 원 위치를 수정  */
  const selectStationByMarker = (
    idx: number,
    station: StationInfoResponse,
    stationCircle: any,
  ) => {
    stationCircle.setPosition(new kakao.maps.LatLng(station.lat, station.lng));
    changeSelectStation({
      idx,
      id: station.id,
      name: station.name,
      time: station.time,
    });
  };

  useEffect(() => {
    settingKakaoMapWithStation(selectStation.idx);
  }, [houseInfo]);

  /* FUNCTION: 선택한 역 주변의 집의 마커를 그림 */
  const [houseMarkersState, setHouseMarkersState] = useState<any[]>([]);
  const drawHouseMarker = (house: HouseInfoResponse[]) => {
    if (house === undefined) {
      return;
    }

    houseMarkersState.map((houseMarker: any) => {
      houseMarker.setMap(null);
    });

    const houseMarkers: any[] = [];

    house.forEach((info: HouseInfoResponse) => {
      const houseMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(info.position.lat, info.position.lng),
        clickable: true,
      });
      kakao.maps.event.addListener(houseMarker, 'click', function () {
        console.log('marker click');
      });
      houseMarkers.push(houseMarker);
    });

    houseMarkers.forEach((houseMarker: any) => {
      houseMarker.setMap(map);
    });

    setHouseMarkersState(houseMarkers);
  };

  /* FUNCTION: 창 크기 변하는 것 */
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container>
      <HouseFilter
        type={type}
        area={area}
        fee={fee}
        rent={rent}
        handleFeeChange={handleFeeChange}
        handleRentChange={handleRentChange}
        handleAreaChange={handleAreaChange}
        handleFilterReset={handleFilterReset}
        handleQueryChange={handleQueryChange}
        handleTimeChange={handleTimeChange}
        goSearch={goSearch}
      />
      <S.Map width={width - 700} id="map"></S.Map>
    </S.Container>
  );
}

export default KakaoMap;
