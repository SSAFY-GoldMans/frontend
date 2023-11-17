import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

import { ApiResponse } from '@/@types/global';
import { MemberLoginRequest, MemberLoginResponse } from '@/@types/member';

const requestLogin = (request: MemberLoginRequest) => {
  return axios.post<ApiResponse<number>>(API_PATH.MEMBER.LOGIN, request);
};

export { requestLogin };
