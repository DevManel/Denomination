// src/components/Input.jsx
import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 200px;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
  }
`;

const Input = ({ value, onChange, placeholder }) => {
  return (
    <InputStyled
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
