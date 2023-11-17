import { BROWSER_PATH } from '@/constants/path';

import * as S from './index.styled';

function LoginForm() {
  return (
    <S.Container>
      <S.LoginForm>
        <S.Label>
          이메일
          <S.Input />
        </S.Label>
        <S.Label>
          비밀번호
          <S.Input />
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
