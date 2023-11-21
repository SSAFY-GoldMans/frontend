import StationInfo from '../StationInfo';

import { StationInfoResponse } from '@/@types/apis/metro';

import * as S from './index.styled';

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
