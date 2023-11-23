import { useEffect, useState } from 'react';

import HouseCard from '../HouseCard';
import HouseInfo from '../HouseInfo';
import {
  HouseDetailRequest,
  HouseDetailResponse,
  HouseInfoResponse,
} from '@/@types/apis/house';

import * as S from './index.styled';

import { AgentInfoType } from '@/@types/agent';
import { requestHouseDetail } from '@/apis/request/house';

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
  isHouseInfoVisible: boolean;
  handleHouseCardVisible: () => void;
  houseDetailReq: HouseDetailRequest;
  handleHouseDetailChange: (id: number, type: string) => void;
  houseDetail: HouseDetailResponse;
  fetchHouseDetail: (req: HouseDetailRequest) => void;
}

function MainRightSide({
  houseInfo,
  fromStation,
  toStation,
  time,
  fetchHouseDetail,
  houseDetailReq,
  handleHouseCardVisible,
  handleHouseDetailChange,
  houseDetail,
  isHouseInfoVisible,
}: Props) {
  /* FUNCTION: 집 상세 정보 보기 요청 값 변경 시 API 호출 */
  useEffect(() => {
    fetchHouseDetail(houseDetailReq!);
  }, [houseDetailReq]);

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
        {houseDetail !== undefined && isHouseInfoVisible ? (
          <HouseInfo
            houseInfoHandler={handleHouseCardVisible}
            houseDetail={houseDetail}
            agent={info3}
          />
        ) : (
          houseInfo.map((info: HouseInfoResponse, index: number) => {
            return (
              <HouseCard
                key={index}
                info={info}
                houseInfoHandler={handleHouseCardVisible}
                handleHouseDetailChange={handleHouseDetailChange}
              />
            );
          })
        )}
      </S.HouseCardWrapper>
    </S.Container>
  );
}

export default MainRightSide;
