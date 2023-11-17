import { useNavigate } from 'react-router-dom';

import NotFoundAnimation from '@/components/Animation/NotFound';
import { BROWSER_PATH } from '@/constants/path';

import * as S from './index.styled';

function NotFound() {
  const navigate = useNavigate();

  const handleClickGoHome = () => {
    navigate(BROWSER_PATH.BASE);
  };

  const handleClickGoBack = () => {
    history.back();
  };

  return (
    <S.Container>
      <NotFoundAnimation />
      <S.Wrapper>
        <S.Button onClick={handleClickGoHome}>Go Home</S.Button>
        <S.Button onClick={handleClickGoBack}>Go Back</S.Button>
      </S.Wrapper>
    </S.Container>
  );
}

export default NotFound;
