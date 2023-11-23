import styled from '@emotion/styled';

import { color } from '@/styles/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  overflow: hidden;
  border-bottom: 1px solid ${color.gray001 + 50};
  transition: box-shadow 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
`;

const StationName = styled.h2`
  font-size: 1.4rem;
  margin: 0 10px 0 0;
`;

const Address = styled.p`
  font-size: 16px;
  margin: 0;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  padding: 16px;
`;

const Time = styled.p`
  font-size: 20px;
  margin: 0;
`;

const Price = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Line = styled.p<{ color: string }>`
  background-color: ${props => props.color};
  min-width: 24px;
  height: 24px;
  font-size: 16px;
  border-radius: 100px;

  margin-left: 5px;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  TopWrapper,
  StationName,
  Address,
  BottomWrapper,
  Time,
  Price,
  Line,
  StationWrapper,
};
