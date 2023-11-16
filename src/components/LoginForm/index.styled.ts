import styled from '@emotion/styled';

type Props = {
  
}

const Container = styled.div``;

const LoginForm = styled.form`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  width: 460px;
  padding: 50px 30px;
  border: 1px solid #0f0f0f50;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #0f0f0f25;
`

const Input = styled.input`
  width: 460px;
  height: 42px;
  margin-bottom: 40px;

  border: 0;
  border-bottom: 2px solid #00000050;

  font-size: 16px;

  transition: all 100ms;

  &:focus {
    outline: none;
    border-bottom: 2.5px solid #3a60d4;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  font-size: 20px;

  width: 460px;
  height: 52px;

  background-color: #3a60d4;
  color: #f8f8f8;

  border-radius: 10px;
`

export { Container, LoginForm, Input, Label, Button  };
