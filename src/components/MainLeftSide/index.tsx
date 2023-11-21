import { StationInfoType } from '@/@types/metro';
import StationInfo from '../StationInfo';

import * as S from './index.styled';
import { StationInfoResponse } from '@/@types/apis/metro';

interface Props {
  stationInfo: StationInfoResponse[];
}

function MainLeftSide({ stationInfo }: Props) {
  return (
    <S.Container>
      {stationInfo.map((info: StationInfoResponse, index: number) => (
        <StationInfo key={index} {...info} />
      ))}
    </S.Container>
  );
}

export default MainLeftSide;
