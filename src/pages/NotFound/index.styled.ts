import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { color } from '@/styles/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 450px;
  margin-top: 100px;
`;

const Button = styled.button`
  font-size: 20px;

  width: 200px;
  height: 52px;

  background-color: ${color.yellow001};
  color: ${color.white001};

  border-radius: 10px;
`;

const StyledButton = styled(Link)`
  font-size: 20px;

  width: 200px;
  height: 52px;

  background-color: ${color.yellow001};
  color: ${color.white001};

  border-radius: 10px;
`;

export { Container, Wrapper, Button, StyledButton };
