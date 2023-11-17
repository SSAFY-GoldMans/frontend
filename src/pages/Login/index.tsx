import { HouseAnimation } from '@/components/Animation';
import LoginForm from '@/components/LoginForm';

import * as S from './index.styled';

function Login() {
  return (
    <S.Container>
      <HouseAnimation />
      <LoginForm />
    </S.Container>
  );
}

export default Login;
