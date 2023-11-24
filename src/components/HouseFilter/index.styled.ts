import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { color } from '@/styles/colors';

const Pointer = css`
  cursor: pointer;
`;

const Container = styled.div`
  position: absolute;
  width: 376px;
  margin: 10px;
  z-index: 100;

  padding: 8px 0;

  background-color: ${color.white001};
`;

const RowBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  margin: 0;
  padding: 0 10px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Input = styled.input`
  width: 210px;
  height: 9px;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  color: ${color.gray003};
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 5px;
  border: 1px solid ${color.yellow001};
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: ${color.gray003 + 90};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const SelectBoxWrapper = styled.div`
  margin: -20px;
  margin-right: 0;
`;

const Line = styled.div`
  margin-top: 8px;
  border-bottom: 1px solid ${color.gray001 + 25};
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 26px;
  margin-top: 7.5px;
  border: 1px solid ${color.gray001 + 25};
`;

const SelectComment = styled.p`
  font-size: 12px;
  color: ${color.gray001 + 90};
`;

const FilterHandlerButton = styled.button`
  margin-top: 8px;

  width: 54px;
  height: 28px;
  border-radius: 0;
  border: 1px solid ${color.gray001 + 75};

  background-color: ${color.white001};
`;

const FilterHandlerButtonComment = styled.p`
  font-size: 12px;
  color: ${color.gray001 + 90};
`;

const FilterWrapper = styled.div`
  margin-top: 8px;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin: 8px 0;

  font-size: 20px;
`;

const FilterHeader = styled.h1`
  margin: 8px 0;

  font-size: 20px;
  color: ${color.black001};
`;

const FilterCard = styled.div`
  padding: 12px;
`;

const FilterComment = styled.p`
  font-size: 14px;
`;

const MoneyInput = styled.input`
  margin: 8px 0;

  font-size: 20px;
  color: ${color.yellow001};
  border: 0;
`;

const SliderWidth = css`
  width: 330px;
`;

const Button = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  translate: 325px 1px;

  z-index: 1;

  cursor: pointer;
`;

export {
  Container,
  RowBetweenWrapper,
  ColumnWrapper,
  Input,
  SelectBoxWrapper,
  Line,
  SelectWrapper,
  SelectComment,
  FilterHandlerButton,
  FilterHandlerButtonComment,
  FilterWrapper,
  FilterHeader,
  RowWrapper,
  Pointer,
  FilterCard,
  FilterComment,
  Header,
  MoneyInput,
  SliderWidth,
  Button,
};
