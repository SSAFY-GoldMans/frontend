import { useNavigate } from 'react-router-dom';
import { HouseInfoResponse } from '@/@types/apis/house';
import * as S from './index.styled';

interface Props {
  info: HouseInfoResponse;
  houseInfoHandler: () => void;
}

function HouseCard({ info, houseInfoHandler }: Props) {
  const navigate = useNavigate();

  const handlerHouseInfo = () => {
    houseInfoHandler();
    navigate(`?id=${info.id}`);
  };

  return (
    <S.Container onClick={handlerHouseInfo}>
      <S.Wrapper>
        <S.HouseImg src={info.img} />
        <S.InfoWrapper>
          <S.Name>{info.name}</S.Name>
          <S.Price>{info.price}</S.Price>
          <S.Info>
            {info.area} · {info.floor}층
          </S.Info>
          <S.Info>{info.address}</S.Info>
        </S.InfoWrapper>
      </S.Wrapper>
      <S.Line />
    </S.Container>
  );
}

export default HouseCard;
