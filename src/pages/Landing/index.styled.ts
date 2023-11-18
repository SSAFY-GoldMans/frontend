import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  height: 100vh;
`;

const Comment = styled.p`
  font-size: 14px;
  color: #323232;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export { Container, Comment, OptionWrapper };
