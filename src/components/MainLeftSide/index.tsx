import StationInfo from '../StationInfo';

import { StationInfoResponse } from '@/@types/apis/metro';

import * as S from './index.styled';
import { SelectStationType } from '@/@types/metro';

interface Props {
  stationInfo: StationInfoResponse[];
  changeSelectStation: ({ id, name, time }: SelectStationType) => void;
}

function MainLeftSide({ stationInfo, changeSelectStation }: Props) {
  return (
    <S.Container>
      {stationInfo.map((info: StationInfoResponse, index: number) => (
        <StationInfo
          key={index}
          stationInfo={info}
          changeSelectStation={changeSelectStation}
        />
      ))}
    </S.Container>
  );
}

export default MainLeftSide;
