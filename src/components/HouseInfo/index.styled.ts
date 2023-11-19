import { color } from '@/styles/colors';
import styled from '@emotion/styled';
import { Box, Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  width: 360px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Img = styled.img`
  position: static;
  height: 244px;
  width: 360px;
`;

const BackButton = styled.div`
  z-index: 999;
  position: absolute;
  padding: 3px;
  margin: 5px;

  background-color: ${color.white001 + 66};
  font-size: 14px;
  border-radius: 5px;

  cursor: pointer;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const Header = styled.h1`
  font-size: 26px;

  border-bottom: 1px solid ${color.black001 + 90};
`;

const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
`;

const BoldComment = styled.p`
  font-size: 19px;

  padding-right: 15px;
  width: 110px;

  color: ${color.black001};
`;

const NameComment = styled.p`
  font-size: 19px;

  padding-right: 15px;

  color: ${color.black001};
`;

const Comment = styled.p`
  font-size: 18px;

  padding-right: 15px;

  color: ${color.gray001};
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 20px;

  margin: 30px 0;
  width: 300px;
  height: 52px;

  background-color: ${color.blue001};
  color: ${color.white001};

  border-radius: 10px;
`;

const StyledSnackbar = styled(Snackbar)`
  font-size: 100px;
`;

export {
  Container,
  Img,
  BackButton,
  Wrapper,
  Header,
  ColumnWrapper,
  BoldComment,
  NameComment,
  Comment,
  ButtonWrapper,
  Button,
  StyledSnackbar,
};
