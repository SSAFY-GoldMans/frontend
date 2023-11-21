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

export { MemberLoginRequest, MemberSignupRequest };
