// src/components/Button.jsx
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
