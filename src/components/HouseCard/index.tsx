import { useSearchParams } from 'react-router-dom';
import { HouseInfoResponse } from '@/@types/apis/house';
import * as S from './index.styled';

interface Props {
  info: HouseInfoResponse;
  houseInfoHandler: () => void;
  handleHouseDetailChange: (id: number, type: string) => void;
}

function HouseCard({ info, houseInfoHandler, handleHouseDetailChange }: Props) {
  const [searchParam] = useSearchParams();
  const handlerHouseInfo = async () => {
    const type: string = searchParam.get('type')!.toLocaleUpperCase();
    await handleHouseDetailChange(info.id, type);
    houseInfoHandler();
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
