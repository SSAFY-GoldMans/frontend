import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';
import { ApiResponse } from '@/@types/global';
import { StationInfoRequest, StationInfoResponse } from '@/@types/apis/metro';

const requestStationInfo = (request: StationInfoRequest) => {
  return axios.post<ApiResponse<StationInfoResponse[]>>(
    API_PATH.METRO.STATION_INFO,
    request,
  );
};

export { requestStationInfo };
