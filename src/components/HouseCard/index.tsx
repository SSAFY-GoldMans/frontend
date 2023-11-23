import { useSearchParams } from 'react-router-dom';
import { HouseInfoResponse } from '@/@types/apis/house';
import * as S from './index.styled';

import { IMAGE_URL } from '@/constants/image';

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

  const getRandomImageUrl: () => string = () => {
    return IMAGE_URL[(info.id % IMAGE_URL.length) - 1];
  };

  return (
    <S.Container onClick={handlerHouseInfo}>
      <S.Wrapper>
        {/* TODO: 추후 path로 수정 */}
        <S.HouseImg src={getRandomImageUrl()} />
        <S.InfoWrapper>
          <S.Name>{info.position.name}</S.Name>
          <S.Info>{info.address}</S.Info>
          <S.Price>{info.price}</S.Price>
          <S.Info>
            {info.area} · {info.floor}층
          </S.Info>
        </S.InfoWrapper>
      </S.Wrapper>
      <S.Line />
    </S.Container>
  );
}

export default HouseCard;
