import styled from "styled-components";

export const Container = styled.div``;

export const InputText = styled.p`
  color: #000;
  font-size: 16px;
  font-family: Lato;
`;

export const Input_Field = styled.input`
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 15px;
  background: #f5f5f5;
  color: #000;
  font-size: 16px;
  font-family: Lato;
  border: none;

  &:focus {
    outline: none;
    background: #eaeaea;
  }
`;
