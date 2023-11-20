import styled from '@emotion/styled';

type ScreenProps = {
  width: number;
};

const Container = styled.div`
  display: flex;
  margin: 0;
`;

const Map = styled.div<ScreenProps>`
  position: static;
  height: 859px;
  width: ${props => (props.width ? `${props.width}px` : '100%')};

  margin: 0;
`;

export { Container, Map };
