type MemberLoginRequest = {
  email: string;
  password: string;
};

type MemberSignupRequest = {
  email: string;
  password: string;
  validatePassword: string;
  phone: string;
  role: string;
};

type MemberLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export { MemberLoginRequest, MemberSignupRequest, MemberLoginResponse };
