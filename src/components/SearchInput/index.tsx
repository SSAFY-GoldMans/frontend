import * as S from './index.styled';

function SearchInput() {
  return (
    <S.Container>
      <S.Input type={'Text'} placeholder={'원하시는 역명을 검색해주세요'} />
    </S.Container>
  );
}

export default SearchInput;
