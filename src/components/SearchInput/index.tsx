import * as S from './index.styled';

interface Props {
  query: string;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ query, handleQueryChange }: Props) {
  return (
    <S.Container>
      <S.Input
        type={'Text'}
        placeholder={'원하시는 역명을 검색해주세요'}
        value={query}
        onChange={handleQueryChange}
      />
    </S.Container>
  );
}

export default SearchInput;
