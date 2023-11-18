import { color } from '@/styles/colors';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  height: 100px;

  border-bottom: 1px solid ${color.gray003 + 50};
`;

const LogoWrapper = styled.div`
  width: 300px;
`;

const Logo = styled.h1``;

const BuildingWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  flex-direction: row;
  margin-left: 100px;
  width: 100%;
`;

const BuildingInfoWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  flex-direction: column;
  background-color: red;
`;

const BuildingInfoHeader = styled.p`
  font-size: 16px;
`;

const BuildingInfoComment = styled.p`
  font-size: 12px;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 500px;
`;

export {
  Container,
  LogoWrapper,
  Logo,
  BuildingWrapper,
  BuildingInfoWrapper,
  BuildingInfoHeader,
  BuildingInfoComment,
  UserWrapper,
};
