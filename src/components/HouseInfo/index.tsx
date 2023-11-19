import { useNavigate } from 'react-router-dom';

import { AgentInfoType } from '@/@types/agent';
import { BuildingInfoType } from '@/@types/building';

import * as S from './index.styled';

interface Props {
  houseInfoHandler: () => void;
  building: BuildingInfoType;
  agent: AgentInfoType;
}

function HouseInfo({ houseInfoHandler, building, agent }: Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    houseInfoHandler();
    navigate(``);
  };

  return (
    <S.Container>
      <S.BackButton onClick={handleBack}>뒤로가기</S.BackButton>
      <S.Img src={building.imgPath}></S.Img>
      <S.Wrapper>
        <S.Header>건물정보</S.Header>
        <S.ColumnWrapper>
          <S.BoldComment>가격정보</S.BoldComment>
          <S.Comment>{building.price}</S.Comment>
        </S.ColumnWrapper>
        <S.ColumnWrapper>
          <S.BoldComment>전용면적</S.BoldComment>
          <S.Comment>{building.area}</S.Comment>
        </S.ColumnWrapper>
        <S.ColumnWrapper>
          <S.BoldComment>해당층</S.BoldComment>
          <S.Comment>{building.floor}층</S.Comment>
        </S.ColumnWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.Header>공인중개사</S.Header>
        <S.NameComment>{agent.name} 공인중개사</S.NameComment>
        <S.Comment>{agent.comment}</S.Comment>
      </S.Wrapper>
      <S.Wrapper>
        <S.Header>중개사무소 정보</S.Header>
        <S.ColumnWrapper>
          <S.BoldComment>중개사무소명</S.BoldComment>
          <S.Comment>{agent.companyName}</S.Comment>
        </S.ColumnWrapper>
        <S.ColumnWrapper>
          <S.BoldComment>대표</S.BoldComment>
          <S.Comment>{agent.name}</S.Comment>
        </S.ColumnWrapper>
        <S.ColumnWrapper>
          <S.BoldComment>대표번호</S.BoldComment>
          <S.Comment>{agent.phone}</S.Comment>
        </S.ColumnWrapper>
        <S.ColumnWrapper>
          <S.BoldComment>소재지</S.BoldComment>
          <S.Comment>{agent.address}</S.Comment>
        </S.ColumnWrapper>
        <S.ColumnWrapper>
          <S.BoldComment>등록번호</S.BoldComment>
          <S.Comment>{agent.code}</S.Comment>
        </S.ColumnWrapper>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.Button>문의하기</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default HouseInfo;
