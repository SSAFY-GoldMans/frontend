import { useState } from 'react';

import { MemberLoginRequest } from '@/@types/apis/member';
import { requestLogin } from '@/apis/request/member';
import { BROWSER_PATH } from '@/constants/path';

import { HouseAnimation } from '@/components/Animation';
import * as S from './index.styled';
import useAuth from '@/hooks/useAuth';

function Login() {
  /* STATE: 사용자의 로그인 정보 */
  const [info, setInfo] = useState<MemberLoginRequest>({
    email: '',
    password: '',
  });

  const { setAuth } = useAuth();
  /**
   * FUNCTION: 사용자 정보 수정 핸들러
   * @param e `Input`의 `onChange`
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  /**
   * API: 로그인을 진행한다.
   * @param e `Form`의 `Action`
   */
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    requestLogin(info)
      .then(res => {
        const token = {
          accessToken: res.data.body.accessToken,
          refreshToken: res.data.body.refreshToken,
        };
        setAuth({ ...token });
        history.back();
      })
      .catch(error => {
        /* TODO: 로그인 실패시 UI/UX 구현 */
        console.log('Login Failed');
      });
  };

  return (
    <S.Container>
      <HouseAnimation />
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

export default Login;
