import React from 'react';

import * as S from './index.styled';

interface Props {
  option: string[];
  handleTimeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectBox({ option, handleTimeChange }: Props) {
  return (
    <S.Container>
      <S.StyledSelect onChange={handleTimeChange}>
        {option.map((value: string, index: number) => (
          <S.StyledOption key={index} value={value}>
            {value}
          </S.StyledOption>
        ))}
      </S.StyledSelect>
      <S.ArrowIcon />
    </S.Container>
  );
}

export default SelectBox;
