import { color } from '@/styles/colors';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;

  width: 330px;
  height: 130px;
  padding-top: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${color.blue001 + 10};
  }
`;

const Wrapper = styled.div`
  display: flex;

  flex-direction: row;
`;

const HouseImg = styled.img`
  width: 144px;
  height: 112px;

  border-radius: 5px;
  padding-right: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 175px;
`;

const Name = styled.p`
  font-size: 20px;
  color: ${color.black001 + 99};
`;

const Info = styled.p`
  font-size: 15px;
  color: ${color.black001 + 99};
`;

const Price = styled.h1`
  font-size: 18px;
  font-weight: 900;
`;

const Line = styled.div`
  width: 330px;

  border-bottom: 1px solid ${color.gray001 + 40};
`;

export { Container, Wrapper, HouseImg, InfoWrapper, Name, Price, Info, Line };
