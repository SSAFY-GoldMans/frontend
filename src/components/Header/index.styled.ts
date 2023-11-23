import { color } from '@/styles/colors';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  width: 100%;
  height: 75px;

  border-bottom: 1px solid ${color.gray003 + 50};
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const Logo = styled.h1`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
  height: 50px;
`;

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

const AccountButton = styled.button`
  min-width: 106px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(238, 238, 238);
  padding: 5px 8px 6px;

  transform: translateX(-30px);
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
  AccountButton,
  Img,
};
