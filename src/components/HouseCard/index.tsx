import { useNavigate } from 'react-router-dom';

import { BuildingCardType } from '@/@types/building';

import * as S from './index.styled';

interface Props {
  building: BuildingCardType;
  houseInfoHandler: () => void;
}

function HouseCard({ building, houseInfoHandler }: Props) {
  const navigate = useNavigate();

  const handlerHouseInfo = () => {
    houseInfoHandler();
    navigate(`?id=${building.id}`);
  };

  return (
    <S.Container onClick={handlerHouseInfo}>
      <S.Wrapper>
        <S.HouseImg src={building.img} />
        <S.InfoWrapper>
          <S.Name>{building.name}</S.Name>
          <S.Price>{building.price}</S.Price>
          <S.Info>
            {building.area} · {building.floor}층
          </S.Info>
          <S.Info>{building.address}</S.Info>
        </S.InfoWrapper>
      </S.Wrapper>
      <S.Line />
    </S.Container>
  );
}

export default HouseCard;
