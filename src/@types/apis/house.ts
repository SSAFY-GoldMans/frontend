type HouseInfoRequest = {
  buildingType: string;
  rentType: string;
  stationName: string;
  fee: {
    max: number;
    min: number;
  };
  rent: {
    max: number;
    min: number;
  };
  area: {
    max: number;
    min: number;
  };
};

type HouseInfoResponse = {
  id: number; // 매물 Id
  img: string; // 건물 사진 (아무거나 보내셈)
  price: string; // 매물 가격
  area: string; // 전용 면적
  floor: number; // 매물 층수
  address: string; // 건물 주소
  position: {
    id: number;
    name: string;
    lat: number;
    lng: number;
  };
};

type HouseDetailRequest = {
  id: number;
  type: string;
};

type HouseDetailResponse = {
  id: number; // 매물 Id
  img: string; // 건물 사진 (아무거나 보내셈)
  name: string; // 건물 이름
  price: string; // 매물 가격
  area: string; // 전용 면적
  floor: number; // 매물 층수
  address: string; // 건물 주소
};

export {
  HouseInfoRequest,
  HouseInfoResponse,
  HouseDetailRequest,
  HouseDetailResponse,
};
