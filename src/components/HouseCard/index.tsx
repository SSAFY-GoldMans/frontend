import { BuildingCardType } from '@/@types/building';

import * as S from './index.styled';

function HouseCard({
  img,
  name,
  price,
  area,
  floor,
  address,
}: BuildingCardType) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.HouseImg src={img} />
        <S.InfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Price>{price}</S.Price>
          <S.Info>
            {area} · {floor}층
          </S.Info>
          <S.Info>{address}</S.Info>
        </S.InfoWrapper>
      </S.Wrapper>
      <S.Line />
    </S.Container>
  );
}

export default HouseCard;
