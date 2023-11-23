type StationInfoType = {
  name: string;
  address: string;
  time: number;
  minPrice: string;
  maxPrice: string;
  totalCount: number;
};

type StationMapInfoType = {
  id: number; // 지하철 Id
  name: string; // 지하철 이름
  lng: number; // y좌표
  lat: number; // x좌표
};

/* `/home` 오른쪽 상단 */
type SelectStationType = {
  idx: number;
  id: number;
  name: string;
  time: string;
};

export { StationInfoType, StationMapInfoType, SelectStationType };
