import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 45px;
`;
export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapperRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 180px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
`;

export const Input = styled.input`
  color: #b0b0b0;
  font-size: 14px;
  width: 130px;
  font-family: Lato;
  border: none;
  margin-left: 15px;
  &:focus {
    outline: none;
  }
`;

export const Icon = styled(Image)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
  margin-right: 15px;
  cursor: pointer;
`;

export const Image_Component = styled(Image)`
  width: 52px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 200px;
`;
