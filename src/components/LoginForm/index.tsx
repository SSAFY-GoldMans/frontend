import * as S from './index.styled';

function LoginForm() {
  return <S.Container>
        <S.LoginForm>
        <S.Label>이메일
        <S.Input />
        </S.Label>
        <S.Label>비밀번호
        <S.Input />
        </S.Label>
        <S.Button type={'submit'}>로그인</S.Button>
    </S.LoginForm>
  </S.Container>;
}

export default LoginForm;