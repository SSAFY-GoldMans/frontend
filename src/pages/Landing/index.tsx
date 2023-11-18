import SearchMapAnimation from '@/components/Animation/SearchMap';
import SearchInput from '@/components/SearchInput';
import SelectBox from '@/components/SelectBox';

import * as S from './index.styled';

function Landing() {
  const SelectTimes: string[] = [
    '상관 없음',
    '15분 이내',
    '30분 이내',
    '60분 이내',
  ];

  return (
    <S.Container>
      <SearchMapAnimation />
      <SearchInput />
      <S.OptionWrapper>
        <S.Comment>이동 시간</S.Comment>
        <SelectBox option={SelectTimes} />
      </S.OptionWrapper>
    </S.Container>
  );
}

export default Landing;
