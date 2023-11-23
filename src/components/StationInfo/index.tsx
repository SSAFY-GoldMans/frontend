import { StationInfoResponse } from '@/@types/apis/metro';
import { SelectStationType } from '@/@types/metro';

import * as S from './index.styled';
import { LINE } from '@/constants/metro';

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
        <S.StationWrapper>
          <S.StationName>{stationInfo.name}</S.StationName>
          {stationInfo.lines.map((id: number) => {
            const line = LINE.find(line => line.id === id);
            return line ? (
              <S.Line key={id} color={line.color}>
                {line.name}
              </S.Line>
            ) : null;
          })}
        </S.StationWrapper>
        <S.Time>{stationInfo.time}</S.Time>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Address>{stationInfo.address}</S.Address>
        <S.Price>{stationInfo.price}</S.Price>
      </S.BottomWrapper>
    </S.Container>
  );
}

export default StationInfo;
