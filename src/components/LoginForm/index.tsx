import { useState } from 'react';

import { BROWSER_PATH } from '@/constants/path';
import { MemberLoginRequest } from '@/@types/member';
import { requestLogin } from '@/apis/request/member';

import * as S from './index.styled';

function LoginForm() {
  const [info, setInfo] = useState<MemberLoginRequest>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    requestLogin(info)
      .then(response => {
        alert(response.data);
        history.back();
      })
      .catch(error => {
        console.log('Login Failed');
      });
  };

  return (
    <S.Container>
      <S.LoginForm onSubmit={login}>
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
        <S.Button type={'submit'}>로그인</S.Button>
        <S.Comment>
          아직 회원이 아니신가요?
          <S.StyledLink to={BROWSER_PATH.SIGNUP}>회원가입</S.StyledLink>
        </S.Comment>
      </S.LoginForm>
    </S.Container>
  );
}

export default LoginForm;
