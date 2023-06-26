import styled from "styled-components";
import Image from "next/image";
import { deviceWidth } from "../../constant/deviceWidth";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 10px;
  
  @media ${deviceWidth.tablet} {
    flex-direction: row;
    padding: 0 20px;
  }
 
  @media ${deviceWidth.laptop} {
    padding-right: 45px;
    padding: 0;
  }
`;
export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapperRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media ${deviceWidth.tablet} {
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 65%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;

  @media ${deviceWidth.tablet} {
    width: 180px;
  }
`;

export const Input = styled.input`
  color: #b0b0b0;
  font-size: 14px;
  width: 100%;
  font-family: Lato;
  border: none;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
  
  @media ${deviceWidth.tablet} {
    width: 130px;
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
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 200px;

  @media ${deviceWidth.tablet} {
    width: 52px;
    height: 51px;
  }
`;
