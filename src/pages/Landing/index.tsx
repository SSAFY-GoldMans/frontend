import { TimeOption } from '@/constants/filter';
import SearchMapAnimation from '@/components/Animation/SearchMap';
import SearchInput from '@/components/SearchInput';
import SelectBox from '@/components/SelectBox';

import * as S from './index.styled';

function Landing() {
  return (
    <S.Container>
      <SearchMapAnimation />
      <SearchInput />
      <S.OptionWrapper>
        <S.Comment>이동 시간</S.Comment>
        <SelectBox option={TimeOption} />
      </S.OptionWrapper>
    </S.Container>
  );
}

export default Landing;
