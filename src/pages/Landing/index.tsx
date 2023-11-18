import SearchInput from '@/components/SearchInput';
import * as S from './index.styled';

function Landing() {
  return (
    <S.Container>
      <SearchInput />
      <div>필터 영역</div>
    </S.Container>
  );
}

export default Landing;
