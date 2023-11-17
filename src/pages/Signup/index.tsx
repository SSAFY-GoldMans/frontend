import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MemberSignupRequest } from '@/@types/member';
import { requestSignup } from '@/apis/request/member';
import { BROWSER_PATH } from '@/constants/path';
import { ROLE } from '@/constants/member';

import * as S from './index.styled';

function Signup() {
  const navigate = useNavigate();

  const [info, setInfo] = useState<MemberSignupRequest>({
    email: '',
    password: '',
    validatePassword: '',
    phone: '',
    role: ROLE.USER,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {}, [info.phone]);

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    requestSignup(info)
      .then(res => {
        console.log(res);
        navigate(BROWSER_PATH.LOGIN);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      <S.LoginForm onSubmit={signup}>
        <S.Label>
          이메일
          <S.Input
            type="text"
            name="email"
            value={info.email}
            onChange={handleInputChange}
          />
        </S.Label>
        <S.Label>
          비밀번호
          <S.Input
            type="password"
            name="password"
            value={info.password}
            onChange={handleInputChange}
          />
        </S.Label>
        <S.Label>
          검증 비밀번호
          <S.Input
            type="password"
            name="validatePassword"
            value={info.validatePassword}
            onChange={handleInputChange}
          />
        </S.Label>
        <S.Label>
          전화번호
          <S.Input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleInputChange}
          />
        </S.Label>
        <S.Button type={'submit'}>회원가입</S.Button>
        <S.Comment>
          이미 회원이 아니신가요?
          <S.StyledLink to={BROWSER_PATH.LOGIN}>로그인</S.StyledLink>
        </S.Comment>
      </S.LoginForm>
    </S.Container>
  );
}

export default Signup;
