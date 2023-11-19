import { StationInfoType } from '@/@types/metro';

import * as S from './index.styled';

function StationInfo({
  name,
  address,
  time,
  minPrice,
  maxPrice,
}: StationInfoType) {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.StationName>{name}</S.StationName>
        <S.Address>{address}</S.Address>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Time>{time}분</S.Time>
        <S.Price>
          {minPrice} ~ {maxPrice}
        </S.Price>
      </S.BottomWrapper>
    </S.Container>
  );
}

export default StationInfo;
