import { ROLE } from '@/constants/member';
import { color } from '@/styles/colors';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Header = styled.h2`
  font-size: 36px;

  margin-bottom: -90px;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 350px;
  padding: 50px 30px 20px 30px;
  border: 1px solid ${color.black002 + 50};
  border-radius: 10px;
  box-shadow: 2px 2px 2px ${color.black002 + 25};
`;

const Input = styled.input`
  width: 350px;
  height: 42px;
  margin-bottom: 10px;

  border: 0;
  border-bottom: 2px solid ${color.black001 + 50};

  font-size: 16px;

  transition: all 100ms;

  &:focus {
    outline: none;
    border-bottom: 2.5px solid ${color.blue001};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  font-size: 20px;

  margin-top: 30px;
  width: 360px;
  height: 52px;

  background-color: ${color.blue001};
  color: ${color.white001};

  border-radius: 10px;
`;

const Comment = styled.p<{ color: string }>`
  font-size: 16px;
  color: ${props => props.color};
`;

const StyledLink = styled(Link)`
  margin-left: 10px;

  color: gray;
  outline: none;
  text-decoration: none;

  &:hover {
    color: ${color.black001};
  }
`;

const RightWrapper = styled.div`
  justify-content: end;
  height: 550px;

  margin-left: 100px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export {
  Container,
  Header,
  LoginForm,
  Input,
  Label,
  Button,
  Comment,
  StyledLink,
  RightWrapper,
  ToggleWrapper,
};
