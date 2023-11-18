import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  width: 150px;
  margin: 20px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #4caf50;
  }
`;

const StyledOption = styled.option`
  background-color: #fff;
  color: #333;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

export { Container, StyledSelect, StyledOption, ArrowIcon };
