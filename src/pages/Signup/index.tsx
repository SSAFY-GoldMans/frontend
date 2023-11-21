import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MemberSignupRequest } from '@/@types/apis/member';
import { requestSignup } from '@/apis/request/member';
import { BROWSER_PATH } from '@/constants/path';
import { ROLE } from '@/constants/member';

import Switch from '@mui/material/Switch';
import TrainAnimation from '@/components/Animation/Train';

import * as S from './index.styled';
import { color } from '@/styles/colors';

function Signup() {
  const navigate = useNavigate();

  /* STATE: 회원 가입 정보 */
  const [info, setInfo] = useState<MemberSignupRequest>({
    email: '',
    password: '',
    validatePassword: '',
    phone: '',
    role: ROLE.USER,
  });
  const [roleChecked, setRoleChecked] = useState(false);

  /* FUNCTION: 회원 가입 정보 수정 핸들러 */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleChecked(event.target.checked);
  };

  /* FUNCTION: 사용자가 일반 회원인지 중개업자인지 확인 */
  useEffect(() => {
    info.role === ROLE.USER
      ? (info.role = ROLE.AGENT)
      : (info.role = ROLE.USER);
  }, [roleChecked]);

  /**
   * API: 사용자가 입력한 정보로 회원가입을 진행
   * @param e `Form`의 `Action`
   */
  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    requestSignup(info)
      .then(res => {
        navigate(BROWSER_PATH.LOGIN);
      })
      .catch(error => {
        /* TODO: 실패시 UI/UX 구현 */
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
        <S.Comment color={'gray'}>
          이미 회원이신가요?
          <S.StyledLink to={BROWSER_PATH.LOGIN}>로그인</S.StyledLink>
        </S.Comment>
      </S.LoginForm>
      <S.RightWrapper>
        {info.role === ROLE.USER ? (
          <S.Header>당신의 집을 찾아보세요!</S.Header>
        ) : (
          <S.Header>당신의 매물을 올려보세요!</S.Header>
        )}
        <TrainAnimation />
        <S.ToggleWrapper>
          {info.role === ROLE.USER ? (
            <S.Comment color={color.gray001 + 90}>
              혹시 중개업자 이신가요?
            </S.Comment>
          ) : (
            <S.Comment color={color.blue001 + 90}>
              혹시 일반회원 이신가요?
            </S.Comment>
          )}
          <Switch
            checked={roleChecked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </S.ToggleWrapper>
      </S.RightWrapper>
    </S.Container>
  );
}

export default Signup;
