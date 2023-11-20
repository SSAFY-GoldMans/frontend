import { TimeOption } from '@/constants/filter';
import SearchMapAnimation from '@/components/Animation/SearchMap';
import SearchInput from '@/components/SearchInput';
import React, { useState } from 'react';
import SelectBox from '@/components/SelectBox';
import useInput from '@/hooks/useInput';
import * as S from './index.styled';

function Landing() {
  /* 검색 값 */
  const { value: query, changeValue: setQuery } = useInput<string>('');
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e);
  };

  /* 시간 선택 값 */
  const [time, setTime] = useState<number>(0);
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let temp: number = Number.parseInt(value.slice(0, 2));

    setTime(isNaN(temp) ? 0 : temp);
  };

  console.log(time);

  return (
    <S.Container>
      <SearchMapAnimation />
      <SearchInput query={query} handleQueryChange={handleQueryChange} />
      <S.OptionWrapper>
        <S.Comment>이동 시간</S.Comment>
        <SelectBox option={TimeOption} handleTimeChange={handleTimeChange} />
      </S.OptionWrapper>
    </S.Container>
  );
}

export default Landing;
