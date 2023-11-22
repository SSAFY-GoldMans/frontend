import { StationInfoResponse } from '@/@types/apis/metro';
import { SelectStationType } from '@/@types/metro';

import * as S from './index.styled';

interface Props {
  stationInfo: StationInfoResponse;
  changeSelectStation: ({ id, name, time }: SelectStationType) => void;
}

function StationInfo({ stationInfo, changeSelectStation }: Props) {
  const handleOnClick = () => {
    changeSelectStation({
      id: stationInfo.id,
      name: stationInfo.name,
      time: stationInfo.time,
    });
  };
  return (
    <S.Container onClick={handleOnClick}>
      <S.TopWrapper>
        <S.StationName>{stationInfo.name}</S.StationName>
        <S.Address>{stationInfo.address}</S.Address>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Time>{stationInfo.time}</S.Time>
        <S.Price>{stationInfo.price}</S.Price>
      </S.BottomWrapper>
    </S.Container>
  );
}

export default StationInfo;
