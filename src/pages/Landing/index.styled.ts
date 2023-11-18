import styled from '@emotion/styled';

import { color } from '@/styles/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  height: 100vh;
`;

const Comment = styled.p`
  font-size: 14px;
  color: ${color.gray001 + 75};
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export { Container, Comment, OptionWrapper };
