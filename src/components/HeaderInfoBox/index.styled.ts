import { color } from '@/styles/colors';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 10px;

  cursor: pointer;
`;

const BuildingInfoWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  color: ${color.black001 + 90};
  height: 100px;

  &:hover {
    color: ${color.yellow001};
  }
`;

const BuildingInfoHeader = styled.p`
  margin: 0;

  font-size: 20px;
`;

const BuildingInfoComment = styled.p`
  margin: 0;

  font-size: 14px;
`;

const PathWrapper = styled.div`
  z-index: 999;
  display: none;
  position: absolute;

  top: 75px;
  transform: translateX(-10px);

  padding: 10px;
  width: 150px;

  border: 1px solid ${color.gray001 + 33};
  background-color: ${color.white001};
`;

const PathInfo = styled.div`
  width: 150px;
  height: 50px;

  display: flex;

  align-items: center;
`;

const PathComment = styled.p`
  font-size: 15px;
`;

export {
  Container,
  BuildingInfoWrapper,
  BuildingInfoHeader,
  BuildingInfoComment,
  PathWrapper,
  PathInfo,
  PathComment,
};
