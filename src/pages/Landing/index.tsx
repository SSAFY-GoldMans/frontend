import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BUILDING, SALES } from '@/constants/building';
import { BROWSER_PATH } from '@/constants/path';
import { TimeOption } from '@/constants/filter';
import SearchMapAnimation from '@/components/Animation/SearchMap';
import SearchInput from '@/components/SearchInput';
import SelectBox from '@/components/SelectBox';
import useInput from '@/hooks/useInput';

import * as S from './index.styled';

function Landing() {
  const navigate = useNavigate();
  /* STATE: 검색 조건, FUNCTION: 검색 조건 수정 핸들러 */
  const { value: query, changeValue: setQuery } = useInput<string>('');
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e);
  };

  /* STATE: 시간 조건, FUNCTION: 시간 조건 수정 핸들러 */
  const [time, setTime] = useState<number>(120);
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let temp: number = Number.parseInt(value.slice(0, 2));
    setTime(isNaN(temp) ? 120 : temp);
  };

  /**
   * FUNCTION: 엔터를 누른뒤 검색 결과 페이지로 이동
   * @param e React.KeyboardEvent
   */
  const goSearch = () => {
    let uri = BROWSER_PATH.HOME;
    uri += `?query=${query}`;
    uri += `&time=${time}`;
    uri += `&building=${BUILDING.OFFIECTEL}`;
    uri += `&type=${SALES.JEONSE}`;
    navigate(uri);
  };

  return (
    <S.Container>
      <SearchMapAnimation />
      <S.OptionWrapper>
        <S.Comment>이동 시간</S.Comment>
        <SelectBox option={TimeOption} handleTimeChange={handleTimeChange} />
      </S.OptionWrapper>
      <SearchInput
        query={query}
        handleQueryChange={handleQueryChange}
        goSearch={goSearch}
      />
    </S.Container>
  );
}

export default Landing;
