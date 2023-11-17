import { HouseAnimation } from "@/components/Animation";
import LoginForm from "@/components/LoginForm";

import * as S from "./index.styled";
import { BROWSER_PATH } from "@/constants/path";

function Login() {
  return (
    <S.Container>
      <HouseAnimation />
      <LoginForm />

    </S.Container>
  );
}

export default Login;
