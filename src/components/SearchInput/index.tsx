import * as S from './index.styled';

interface Props {
  query: string;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyPress: (e: any) => void;
}

function SearchInput({ query, handleQueryChange, handleOnKeyPress }: Props) {
  return (
    <S.Container>
      <S.Input
        type={'Text'}
        placeholder={'원하시는 역명을 검색해주세요'}
        value={query}
        onChange={handleQueryChange}
        onKeyUp={handleOnKeyPress}
      />
    </S.Container>
  );
}

export default SearchInput;
