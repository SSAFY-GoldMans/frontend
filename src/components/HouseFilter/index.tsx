import React, { useEffect, useState } from 'react';

import { TimeOption } from '@/constants/filter';
import { SALES } from '@/constants/building';
import SelectBox from '../SelectBox';

import * as S from './index.styled';
import { Close } from '@mui/icons-material';
import { Slider } from '@mui/material';

interface Props {
  type: string;
  fee: number[];
  rent: number[];
  area: number[];
  handleFeeChange: (event: Event, newValue: number | number[]) => void;
  handleRentChange: (event: Event, newValue: number | number[]) => void;
  handleAreaChange: (event: Event, newValue: number | number[]) => void;
  handleFilterReset: () => void;
  handleTimeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  goSearch: () => void;
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
  handleQueryChange,
  handleTimeChange,
  goSearch,
}: Props) {
  /* STATE: 필터 사용 여뷰, FUNCTION: 필터 토글 기능 */
  const [open, setOpen] = useState<boolean>(false);
  const handleFilterOpen = () => {
    setOpen(!open);
  };

  /* STATE: 보증금, FUNCTION: 보증금을 표시하기 위한 로직 */
  const [feeMessage, setFeeMessage] = useState<String>('전체 금액');
  useEffect(() => {
    const min: number = fee.at(0)!;
    const max: number = fee.at(1)!;
    if (min === 0 && max === 30) {
      setFeeMessage('전체 금액');
    } else if (min === 0 && max !== 30) {
      if (max < 10) {
        setFeeMessage(`${max * 1000}만원 이하`);
      } else {
        setFeeMessage(`${(max * 1.0) / 10}억원 이하`);
      }
    } else if (min !== 0 && max === 30) {
      if (min < 10) {
        setFeeMessage(`${min * 1000}만원 이상`);
      } else {
        setFeeMessage(`${(min * 1.0) / 10}억원 이상`);
      }
    } else if (min === max) {
      if (min < 10) {
        setFeeMessage(`${min * 1000}만원 이상`);
      } else {
        setFeeMessage(`${(min * 1.0) / 10}억원 이상`);
      }
    } else {
      if (min < 10 && max < 10) {
        setFeeMessage(`${min * 1000}만원 - ${max * 1000}만원`);
      } else if (min < 10) {
        setFeeMessage(`${min * 1000}만원 - ${(max * 1.0) / 10}억원`);
      } else {
        setFeeMessage(`${(min * 1.0) / 10}억원 - ${(max * 1.0) / 10}억원`);
      }
    }
  }, [fee]);

  /* STATE: 월세 금액, FUNCTION: 월세 금액을 표시하기 위한 로직*/
  const [rentMessage, setRentMessage] = useState<String>('전체 금액');
  useEffect(() => {
    const min: number = rent.at(0)!;
    const max: number = rent.at(1)!;
    if (min === 0 && max === 10) {
      setRentMessage('전체 금액');
    } else if (min === 0 && max !== 10) {
      setRentMessage(`${max * 10}만원 이하`);
    } else if (min !== 0 && max === 10) {
      setRentMessage(`${min * 10}만원 이상`);
    } else if (min === max) {
      setRentMessage(`${min * 10}만원 이상`);
    } else {
      setRentMessage(`${min * 10}만원 - ${max * 10}만원`);
    }
  }, [rent]);

  /* STATE: 전용 면적, FUNCTION: 전용 면적을 표시하기 위한 로직*/
  const [areaMessage, setAreaMessage] = useState<String>('전체 평수');
  useEffect(() => {
    const min: number = area.at(0)!;
    const max: number = area.at(1)!;
    if (min === 0 && max === 40) {
      setAreaMessage('전체 평수');
    } else if (min === 0 && max !== 40) {
      setAreaMessage(`${max}평 이하`);
    } else if (min !== 0 && max === 40) {
      setAreaMessage(`${min}평 이상`);
    } else if (min === max) {
      setAreaMessage(`${min}평 이상`);
    } else {
      setAreaMessage(`${min}평 - ${max}평`);
    }
  }, [area]);

  /**
   * FUNCTION: 키보드를 누르면 검색을 한다
   * @param e React.KeyboardEvent
   */
  const handleOnKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      goSearch();
    }
  };

  return (
    <S.Container>
      <S.RowBetweenWrapper>
        {/* 검색 */}
        <S.SelectBoxWrapper>
          <SelectBox option={TimeOption} handleTimeChange={handleTimeChange} />
        </S.SelectBoxWrapper>
        <S.Input onChange={handleQueryChange} onKeyUp={handleOnKeyUp} />
        <S.Button onClick={goSearch} />
      </S.RowBetweenWrapper>
      <S.Line />
      {/* 필터 상단 */}
      <S.RowBetweenWrapper css={S.Pointer} onClick={handleFilterOpen}>
        <S.FilterHandlerButton>
          <S.FilterHandlerButtonComment>필터</S.FilterHandlerButtonComment>
        </S.FilterHandlerButton>
        <S.SelectWrapper>
          <S.SelectComment>
            {feeMessage} · {rentMessage} · {areaMessage}
          </S.SelectComment>
        </S.SelectWrapper>
      </S.RowBetweenWrapper>
      <S.Line />
      {open ? (
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
            <S.FilterComment>보증금</S.FilterComment>
            <S.FilterHeader>{feeMessage}</S.FilterHeader>
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
              <S.FilterHeader>{rentMessage}</S.FilterHeader>
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
            <S.FilterHeader>{areaMessage}</S.FilterHeader>
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
