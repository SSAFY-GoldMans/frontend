type KakaoMapHouseRequest = {};

type KakaoMapHouseResponse = {
  id: number;
  lat: number;
  lng: number;
  name: string;
};

type KakaoMapStationRequest = {
  id: number;
};

type KakaoMapStationResponse = {
  id: number;
  lat: number;
  lng: number;
};

export { KakaoMapHouseRequest, KakaoMapHouseResponse };
