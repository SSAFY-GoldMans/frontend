import { useState } from 'react';

import HouseCard from '../HouseCard';
import HouseInfo from '../HouseInfo';
import { HouseInfoResponse } from '@/@types/apis/house';

import * as S from './index.styled';

/* TODO: 추후 API로 분리 */
import { BuildingInfoType } from '@/@types/building';
import { AgentInfoType } from '@/@types/agent';

/* TODO: 후추 API로 분리 */
const info2: BuildingInfoType = {
  imgPath: '1',
  price: '매매 2억 5,000',
  area: '12평',
  floor: 3,
  year: '18년 준공',
};

/* TODO: 추후 API로 분리 */
const info3: AgentInfoType = {
  name: '박상민',
  companyName: '퍼스트공인중개사',
  phone: '010-1234-5678',
  address: '서울 강남구 봉은사로63길',
  code: '11680-2022-00353',
  comment:
    '공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다. 공인중개사 설명 글 입니다.',
};

interface Props {
  houseInfo: HouseInfoResponse[];
  fromStation: string;
  toStation: string;
  time: string;
}

function MainRightSide({ houseInfo, fromStation, toStation, time }: Props) {
  /* STATE: 집 상세 보기 여부, FUNCTION: 집 상세 보기 토글 */
  const [isHouseInfoVisible, setIsHouseInfoVisible] = useState<boolean>(false);
  const handleHouseCardVisible = () => {
    setIsHouseInfoVisible(!isHouseInfoVisible);
  };

  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Header>
          {fromStation} ➡️ {toStation} {time}
        </S.Header>
        <S.HeaderComment>
          시간에 따라 약간의 변동이 있을 수 있습니다.
        </S.HeaderComment>
      </S.HeaderWrapper>
      <S.HouseCardWrapper>
        {isHouseInfoVisible ? (
          <HouseInfo
            houseInfoHandler={handleHouseCardVisible}
            building={info2}
            agent={info3}
          />
        ) : (
          houseInfo.map((info: HouseInfoResponse, index: number) => {
            return (
              <HouseCard
                key={index}
                info={info}
                houseInfoHandler={handleHouseCardVisible}
              />
            );
          })
        )}
      </S.HouseCardWrapper>
    </S.Container>
  );
}

export default MainRightSide;
