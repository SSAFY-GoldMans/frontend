/* 왼쪽 카드 뷰 */
type StationInfoRequest = {
  name: string;
  time: number;
  building: string;
  type: string;
};

type StationInfoResponse = {
  id: number;
  name: string;
  time: string;
  address: string;
  price: string;
  lat: number;
  lng: number;
};

export { StationInfoRequest, StationInfoResponse };
