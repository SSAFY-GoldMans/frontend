/* 왼쪽 카드 뷰 */
type StationInfoRequest = {
  name: string;
  time: number;
  building: string;
  type: string;
};

type StationInfoResponse = {
  name: string;
  time: string;
  address: string;
  price: string;
};

export { StationInfoRequest, StationInfoResponse };
