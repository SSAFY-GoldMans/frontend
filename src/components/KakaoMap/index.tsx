import { useEffect, useState } from 'react';
import HouseFilter from '../HouseFilter';

import * as S from './index.styled';

/* TODO: 추후 분리 */
import { FilterOptionType } from '@/@types/filter';
import { SALES } from '@/constants/building';
const dummyOption: FilterOptionType = {
  type: 'jeonse',
  fee: [2, 50],
  rent: [0, 30],
  area: [1, 30],
};

const [filter, setFilter] = useState<FilterOptionType>({
  type: SALES.JEONSE,
  fee: [0, 30],
  rent: [0, 10],
  area: [0, 40],
});

function KakaoMap() {
  /* 카카오 지도 API  */
  const { kakao } = window;
  useEffect(() => {
    let container = document.getElementById('map');

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
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
      <HouseFilter {...dummyOption} />
      <S.Map width={width - 700} id="map"></S.Map>
    </S.Container>
  );
}

export default KakaoMap;
