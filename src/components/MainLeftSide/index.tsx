import { StationInfoType } from '@/@types/metro';
import StationInfo from '../StationInfo';

import * as S from './index.styled';

interface Props {
  stationInfo: StationInfoType[];
}

function MainLeftSide({ stationInfo }: Props) {
  return (
    <S.Container>
      {stationInfo.map((info: StationInfoType, index: number) => (
        <StationInfo key={index} {...info} />
      ))}
    </S.Container>
  );
}

export default MainLeftSide;
