import { useState } from 'react';

import { TimeOption } from '@/constants/filter';
import { SALES } from '@/constants/building';
import SelectBox from '../SelectBox';

import { Close } from '@mui/icons-material';
import { Slider } from '@mui/material';
import * as S from './index.styled';

interface Props {
  type: string;
  fee: number[];
  rent: number[];
  area: number[];
  handleFeeChange: (event: Event, newValue: number | number[]) => void;
  handleRentChange: (event: Event, newValue: number | number[]) => void;
  handleAreaChange: (event: Event, newValue: number | number[]) => void;
  handleFilterReset: () => void;
}

function HouseFilter({
  type,
  fee,
  rent,
  area,
  handleFeeChange,
  handleRentChange,
  handleAreaChange,
  handleFilterReset,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleFilterOpen = () => {
    setOpen(!open);
  };

  return (
    <S.Container>
      <S.RowBetweenWrapper>
        {/* 검색 */}
        <S.SelectBoxWrapper>
          <SelectBox option={TimeOption} />
        </S.SelectBoxWrapper>
        <S.Input />
      </S.RowBetweenWrapper>
      <S.Line />
      {/* 필터 상단 */}
      <S.RowBetweenWrapper css={S.Pointer} onClick={handleFilterOpen}>
        <S.FilterHandlerButton>
          <S.FilterHandlerButtonComment>필터</S.FilterHandlerButtonComment>
        </S.FilterHandlerButton>
        <S.SelectWrapper>
          <S.SelectComment>
            {fee !== null
              ? `${fee?.at(0)}만원 이상 - ${
                  fee?.at(1) === 30 ? fee?.at(1) + '억원 이상' : fee?.at(1)
                }만원 이하`
              : null}
            ·
            {rent !== null && type === SALES.JEONSE ? `${rent}만원 이하` : null}{' '}
            · {area !== null ? `${area}평대` : null}
          </S.SelectComment>
        </S.SelectWrapper>
      </S.RowBetweenWrapper>
      <S.Line />
      {true ? (
        <S.FilterWrapper>
          <S.RowBetweenWrapper>
            <S.RowWrapper>
              <Close css={S.Pointer} onClick={handleFilterOpen} />
              <S.Header>필터</S.Header>
            </S.RowWrapper>
            {/* 필터 초기화 기능 구현 */}
            <S.SelectComment css={S.Pointer} onClick={handleFilterReset}>
              모두 초기화
            </S.SelectComment>
          </S.RowBetweenWrapper>
          <S.Line />
          {/* 필터 카드 영역 */}
          <S.FilterCard>
            <S.FilterComment>보증금)</S.FilterComment>
            <S.FilterHeader>
              {fee?.at(0)}만원 - {fee?.at(1)}만원
            </S.FilterHeader>
            <S.ColumnWrapper>
              {/* 0만원 ~ 3억원 : 천만단위 */}
              <Slider
                css={S.SliderWidth}
                onChange={handleFeeChange}
                value={fee!}
                min={0}
                max={30}
              />
            </S.ColumnWrapper>
            <S.Line />
          </S.FilterCard>
          {type === SALES.JEONSE ? (
            <S.FilterCard>
              <S.FilterComment>월세</S.FilterComment>
              <S.FilterHeader>
                {rent?.at(0)} - {rent?.at(1)}
              </S.FilterHeader>
              <S.ColumnWrapper>
                {/* 0만원 ~ 100만원 : 10만단위 */}
                <Slider
                  css={S.SliderWidth}
                  onChange={handleRentChange}
                  value={rent!}
                  min={0}
                  max={10}
                />
              </S.ColumnWrapper>
              <S.Line />
            </S.FilterCard>
          ) : (
            <></>
          )}
          <S.FilterCard>
            <S.FilterComment>면적</S.FilterComment>
            <S.FilterHeader>
              {area?.at(0)}평 - {area?.at(1)}평
            </S.FilterHeader>
            <S.ColumnWrapper>
              {/* 0평 ~ 40평 : 1평 단위 */}
              <Slider
                css={S.SliderWidth}
                onChange={handleAreaChange}
                value={area!}
                min={0}
                max={40}
              />
            </S.ColumnWrapper>
            <S.Line />
          </S.FilterCard>
        </S.FilterWrapper>
      ) : (
        <></>
      )}
    </S.Container>
  );
}

export default HouseFilter;
