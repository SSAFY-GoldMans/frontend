import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StationInfoResponse } from '@/@types/apis/metro';
import {
  HouseDetailRequest,
  HouseDetailResponse,
  HouseInfoResponse,
} from '@/@types/apis/house';
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
  isHouseInfoVisible: boolean;
  handleHouseCardVisible: () => void;
  houseDetailReq: HouseDetailRequest;
  handleHouseDetailChange: (id: number, type: string) => void;
  houseDetail: HouseDetailResponse;
  fetchHouseDetail: (req: HouseDetailRequest) => void;
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
  handleHouseCardVisible,
  handleHouseDetailChange,
}: Props) {
  const mapRef = useRef<any>(null);
  const [searchParam] = useSearchParams();

  const settingKakaoMapWithStation = async (idx: number) => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(
        stations.at(idx)?.lat,
        stations.at(idx)?.lng,
      ),
      level: 4,
    };
    mapRef.current = await new kakao.maps.Map(container, options);

    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    mapRef.current.addControl(
      mapTypeControl,
      kakao.maps.ControlPosition.TOPRIGHT,
    );
    mapRef.current.addControl(
      zoomControl,
      kakao.maps.ControlPosition.BOTTOMRIGHT,
    );

    mapRef.current.setMaxLevel(6);
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
    stationCircle.setMap(mapRef.current);
    drawStationMarker(stations, stationCircle);
    drawHouseMarker(houseInfo);
  };

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
        mapRef.current.panTo(markerPosition);
        selectStationByMarker(idx, station, stationCircle);
      });
      stationMarker.setMap(mapRef.current);
    });
  };

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
  }, []);

  useEffect(() => {
    drawHouseMarker(houseInfo);
  }, [houseInfo]);

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
      const handlerHouseInfo = async () => {
        const type: string = searchParam.get('type')!.toLocaleUpperCase();
        await handleHouseDetailChange(info.id, type);
        handleHouseCardVisible();
      };
      const houseMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(info.position.lat, info.position.lng),
        clickable: true,
      });
      kakao.maps.event.addListener(houseMarker, 'click', function () {
        handlerHouseInfo();
      });
      houseMarkers.push(houseMarker);
    });

    houseMarkers.forEach((houseMarker: any) => {
      houseMarker.setMap(mapRef.current);
    });

    setHouseMarkersState(houseMarkers);
  };

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
      <S.Map width={width - 700} ref={mapRef} id="map"></S.Map>
    </S.Container>
  );
}

export default KakaoMap;
