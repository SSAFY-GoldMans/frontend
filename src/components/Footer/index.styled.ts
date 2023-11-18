import styled from '@emotion/styled';

import { color } from '@/styles/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 125px;

  border-top: 1px solid ${color.gray002 + 50};
`;

const Comment = styled.p`
  font-size: 1.1rem;
  color: gray;
`;

export { Container, Comment };
