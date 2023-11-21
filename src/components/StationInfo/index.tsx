import { StationInfoResponse } from '@/@types/apis/metro';

import * as S from './index.styled';

function StationInfo({ name, address, time, price }: StationInfoResponse) {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.StationName>{name}</S.StationName>
        <S.Address>{address}</S.Address>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Time>{time}</S.Time>
        <S.Price>{price}</S.Price>
      </S.BottomWrapper>
    </S.Container>
  );
}

export default StationInfo;
