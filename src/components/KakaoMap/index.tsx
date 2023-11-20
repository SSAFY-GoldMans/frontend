import { useEffect, useState } from 'react';

import MetroStationImg from '@/assets/metro.png';
import HouseFilter from '../HouseFilter';

import * as S from './index.styled';
import { color } from '@/styles/colors';
import { StationMapInfoType } from '@/@types/metro';

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
  station: StationMapInfoType;
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
  station,
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
    let stationCircle = await new kakao.maps.Circle({
      center: new kakao.maps.LatLng(station.lat, station.lng),
      radius: 800,
      strokeWeight: 2,
      strokeColor: color.blue001,
      strokeOpacity: 1,
      strokeStyle: 'solid',
      fillColor: color.blue001 + 20,
      fillOpacity: 0.7,
    });
    await stationCircle.setMap(map);
    var markerImage = await new kakao.maps.MarkerImage(
      MetroStationImg,
      new kakao.maps.Size(33, 33),
    );
    const stationMarkerPosition = await new kakao.maps.LatLng(
      station.lat,
      station.lng,
    );
    const stationMarker = await new kakao.maps.Marker({
      position: stationMarkerPosition,
      clickable: true,
      image: markerImage,
    });
    kakao.maps.event.addListener(stationMarker, 'click', function () {
      map.setLevel(4);
      map.panTo(stationMarkerPosition);
    });

    await stationMarker.setMap(map);
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
      />
      <S.Map width={width - 700} id="map"></S.Map>
    </S.Container>
  );
}

export default KakaoMap;
