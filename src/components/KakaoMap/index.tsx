import { useEffect } from 'react';

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    let container = document.getElementById('map');

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '500px', height: '500px' }}></div>
    </div>
  );
}

export default KakaoMap;
