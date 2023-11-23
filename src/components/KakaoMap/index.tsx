import React, { useEffect, useState } from 'react';

import { StationInfoResponse } from '@/@types/apis/metro';
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
  changeSelectStation: ({ id, name, time }: SelectStationType) => void;
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
  changeSelectStation,
}: Props) {
  /* 카카오 지도 API  */
  let map: any;

  const settingKakaoMapWithStation = async () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(stations.at(0)?.lat, stations.at(0)?.lng),
      level: 4,
    };
    map = await new kakao.maps.Map(container, options);
    /* FUNCTION: 지도 오른쪽에 줌 컨트롤이 표시되도록 지도에 컨트롤을 추가한다. */
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    map.setMaxLevel(6);
    let stationCircle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(stations.at(0)?.lat, stations.at(0)?.lng),
      radius: 800,
      strokeWeight: 2,
      strokeColor: color.blue001,
      strokeOpacity: 1,
      strokeStyle: 'solid',
      fillColor: color.blue001 + 20,
      fillOpacity: 0.7,
    });
    stationCircle.setMap(map);
    drawStationMarker(stations, stationCircle);
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
    stations.map((station: StationInfoResponse) => {
      const markerPosition = new kakao.maps.LatLng(station.lat, station.lng);
      const stationMarker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true,
        image: markerImage,
      });
      kakao.maps.event.addListener(stationMarker, 'click', function () {
        map.panTo(markerPosition);
        selectStationByMarker(station, stationCircle);
      });
      stationMarker.setMap(map);
    });
  };

  /* FUNCTION: 선택한 마커의 원 위치를 수정  */
  const selectStationByMarker = (
    station: StationInfoResponse,
    stationCircle: any,
  ) => {
    stationCircle.setPosition(new kakao.maps.LatLng(station.lat, station.lng));
    changeSelectStation({
      id: station.id,
      name: station.name,
      time: station.time,
    });
  };

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
