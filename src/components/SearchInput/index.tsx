import * as S from './index.styled';

interface Props {
  query: string;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  goSearch: () => void;
}

function SearchInput({ query, handleQueryChange, goSearch }: Props) {
  /**
   * FUNCTION: 엔터를 누르면 내부 함수를 실행
   * @param e React.KeyboardEvent
   */
  const handleOnKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      goSearch();
    }
  };
  return (
    <S.Container>
      <S.Input
        type={'Text'}
        placeholder={'원하시는 역명을 검색해주세요'}
        value={query}
        onChange={handleQueryChange}
        onKeyUp={handleOnKeyUp}
      />
      <S.Button onClick={goSearch} />
    </S.Container>
  );
}

export default SearchInput;
