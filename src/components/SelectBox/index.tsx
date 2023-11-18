import * as S from './index.styled';

type Option = {
  option: string[];
};

function SelectBox({ option }: Option) {
  return (
    <S.Container>
      <S.StyledSelect>
        {option.map((value: string, index: number) => (
          <S.StyledOption key={index} value={value}>
            {value}
          </S.StyledOption>
        ))}
      </S.StyledSelect>
      <S.ArrowIcon></S.ArrowIcon>
    </S.Container>
  );
}

export default SelectBox;
