import { axios } from '@/apis/axios';
import { ApiResponse } from '@/@types/global';
import {
  HouseDetailRequest,
  HouseDetailResponse,
  HouseInfoRequest,
  HouseInfoResponse,
} from '@/@types/apis/house';
import { API_PATH } from '@/constants/path';

type HouseInfoArrayResponse = {
  houseList: HouseInfoResponse[];
};

const requestHouseInfo = (request: HouseInfoRequest) => {
  return axios.post<ApiResponse<HouseInfoArrayResponse>>(
    API_PATH.HOUSE.INFO,
    request,
  );
};

const requestHouseDetail = (request: HouseDetailRequest) => {
  return axios.post<ApiResponse<HouseDetailResponse>>(
    API_PATH.HOUSE.DETAIL,
    request,
  );
};

export { requestHouseInfo, HouseInfoArrayResponse, requestHouseDetail };
