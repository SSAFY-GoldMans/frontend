import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';
import { ApiResponse } from '@/@types/global';
import {
  MemberLoginRequest,
  MemberSignupRequest,
  MemberLoginResponse,
} from '@/@types/apis/member';

const requestLogin = (request: MemberLoginRequest) => {
  return axios.post<ApiResponse<MemberLoginResponse>>(
    API_PATH.MEMBER.LOGIN,
    request,
  );
};

const requestSignup = (request: MemberSignupRequest) => {
  return axios.post<ApiResponse<any>>(API_PATH.MEMBER.SIGNUP, request);
};

export { requestLogin, requestSignup };
