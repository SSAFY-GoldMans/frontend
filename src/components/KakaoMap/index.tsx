import React, { useEffect, useState } from 'react';

import { StationMapInfoType } from '@/@types/metro';
import HouseFilter from '../HouseFilter';

import * as S from './index.styled';
import { color } from '@/styles/colors';
import MetroStationImg from '@/assets/metro.png';
import { StationInfoResponse } from '@/@types/apis/metro';

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
  station: StationMapInfoType;
  stations: StationInfoResponse[];
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
  station,
  stations,
}: Props) {
  /* 카카오 지도 API  */
  let map: any;

  const settingKakaoMapWithStation = async () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(station.lat, station.lng),
      level: 4,
    };
    map = await new kakao.maps.Map(container, options);
    /* FUNCTION: 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다. */
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    map.setMaxLevel(6);
    let stationCircle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(station.lat, station.lng),
      radius: 800,
      strokeWeight: 2,
      strokeColor: color.blue001,
      strokeOpacity: 1,
      strokeStyle: 'solid',
      fillColor: color.blue001 + 20,
      fillOpacity: 0.7,
    });
    stationCircle.setMap(map);
    drawStationMarker(stations);
  };

  const drawStationMarker = async (stations: StationInfoResponse[]) => {
    var markerImage = await new kakao.maps.MarkerImage(
      MetroStationImg,
      new kakao.maps.Size(33, 33),
    );
    stations.map((station: StationInfoResponse) => {
      const markerPosition = new kakao.maps.LatLng(station.lat, station.lng);
      const stationMarker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true,
        image: markerImage,
      });
      kakao.maps.event.addListener(stationMarker, 'click', function () {
        map.setLevel(4);
        map.panTo(markerPosition);
        selectStationByMarker();
      });
      stationMarker.setMap(map);
    });
  };

  const selectStationByMarker = () => {};

  useEffect(() => {
    settingKakaoMapWithStation();
  }, []);

  /* 창 크기 변하는 것 */
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
