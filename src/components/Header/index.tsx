import { useNavigate } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import { HeaderAptType, HeaderOfficetelType } from '@/constants/header';
import HeaderInfoBox from '../HeaderInfoBox';

import * as S from './index.styled';
import Logo from '../../../public/logo.png';

function Header() {
  const navigate = useNavigate();

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
      </S.BuildingWrapper>
      <S.UserWrapper>
        <S.AccountButton onClick={() => navigate(BROWSER_PATH.LOGIN)}>
          로그인 및 회원가입
        </S.AccountButton>
      </S.UserWrapper>
    </S.Container>
  );
}

export default Header;
