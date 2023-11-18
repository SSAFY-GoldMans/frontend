import { color } from '@/styles/colors';
import styled from '@emotion/styled';

type Hover = {
  isHover: boolean;
};

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
    color: ${color.blue001};
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
  display: none;
  position: absolute;

  top: 100px;
  width: 150px;

  z-index: 999;
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
