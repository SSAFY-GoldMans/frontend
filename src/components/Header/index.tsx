import { HeaderAptType, HeaderOfficetelType } from '@/constants/header';
import HeaderInfoBox from '../HeaderInfoBox';
import * as S from './index.styled';

function Header() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo>철부지</S.Logo>
      </S.LogoWrapper>
      <S.BuildingWrapper>
        <HeaderInfoBox {...HeaderAptType} />
        <HeaderInfoBox {...HeaderOfficetelType} />
      </S.BuildingWrapper>
      <S.UserWrapper>
        <div>로그인</div>
      </S.UserWrapper>
    </S.Container>
  );
}

export default Header;
