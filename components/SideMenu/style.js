import Image from "next/image";
import styled from "styled-components";
import { deviceWidth } from "../../constant/deviceWidth";

export const Container = styled.div`
  border-radius: 30px;
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${deviceWidth.laptop} {
    height: 100%;
    padding-right: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
`;

export const Icon = styled(Image)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
  margin-right: 15px;
  cursor: pointer;

  @media ${deviceWidth.laptop} {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 25px;
  font-family: Montserrat;
  font-weight: 700;

  @media ${deviceWidth.laptop} {
    padding-top: 60px;
    font-size: 36px;
  }
`;

export const OptionWrapper = styled.div`
  width: fit-content;
  margin-left: 50px;
  margin-top: 30px;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  gap: 40px;
  height: 350px;

  @media ${deviceWidth.laptop} {
    height: auto;
    display: flex;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
`;

export const OptionIcon = styled(Image)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: "#FFFFFF";
`;

export const OptionText = styled.p`
  color: #fff;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const InfoContainer = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  margin-left: 50px;
  margin-bottom: 60px;

  @media ${deviceWidth.laptop} {
    display: flex;
  }
`;

export const InfoItem = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Montserrat;
  cursor: pointer;
`;
