import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';
import { ApiResponse } from '@/@types/global';
import { MemberLoginRequest, MemberSignupRequest } from '@/@types/apis/member';

const requestLogin = (request: MemberLoginRequest) => {
  return axios.post<ApiResponse<number>>(API_PATH.MEMBER.LOGIN, request);
};

const requestSignup = (request: MemberSignupRequest) => {
  return axios.post<ApiResponse<any>>(API_PATH.MEMBER.SIGNUP, request);
};

export { requestLogin, requestSignup };
