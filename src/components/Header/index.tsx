import { useNavigate } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import {
  HeaderAptType,
  HeaderLoginType,
  HeaderOfficetelType,
} from '@/constants/header';
import HeaderInfoBox from '../HeaderInfoBox';

import * as S from './index.styled';
import Logo from '../../../public/logo.png';
import useAuth from '@/hooks/useAuth';
import { isLoginProvider } from '@/utils/auth';

function Header() {
  const navigate = useNavigate();
  const isLogin: boolean = isLoginProvider.get();
  const { resetAuth } = useAuth();
  const logout = () => {
    resetAuth();
    navigate(BROWSER_PATH.BASE);
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo onClick={() => navigate(BROWSER_PATH.BASE)}>
          <S.Img src={Logo} alt={'logo'} />
        </S.Logo>
      </S.LogoWrapper>
      <S.BuildingWrapper>
        <HeaderInfoBox {...HeaderAptType} />
        <HeaderInfoBox {...HeaderOfficetelType} />
        {isLogin ? <HeaderInfoBox {...HeaderLoginType} /> : null}
      </S.BuildingWrapper>
      <S.UserWrapper>
        {isLogin ? (
          <S.AccountButton
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </S.AccountButton>
        ) : (
          <S.AccountButton onClick={() => navigate(BROWSER_PATH.LOGIN)}>
            로그인 및 회원가입
          </S.AccountButton>
        )}
      </S.UserWrapper>
    </S.Container>
  );
}

export default Header;
