import * as S from './index.styled';

type RightInfoType = {
  startStationName: string;
  nowStationName: string;
  time: number;
};

function MainRightSide({
  startStationName,
  nowStationName,
  time,
}: RightInfoType) {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Header>
          {startStationName} ➡️ {nowStationName} {time}분
        </S.Header>
        <S.HeaderComment>
          시간에 따라 약간의 변동이 있을 수 있습니다 .
        </S.HeaderComment>
      </S.HeaderWrapper>
    </S.Container>
  );
}

export default MainRightSide;
