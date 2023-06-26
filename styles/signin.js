import styled from "styled-components";
import { deviceWidth } from "../constant/deviceWidth";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  @media ${deviceWidth.tablet} {
    flex-direction: row;
  }

  @media ${deviceWidth.laptop} {
    flex-direction: row;
  }
`;

export const WrapperLeft = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${deviceWidth.tablet} {
    padding: 30px;
  }

  @media ${deviceWidth.laptop} {
    flex: 1;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 72px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const WrapperRight = styled.div`
  background: #f5f5f5;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: ${(props) => props.colour};
  cursor: ${(props) => props.cursor};
  font-size: 16px;
  font-family: Lato;
`;

export const LoginContainer = styled.div`
  flex-shrink: 0;
  width: 90%;

  @media ${deviceWidth.tablet} {
    width: 385px;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 26px;

  @media ${deviceWidth.tablet} {
    gap: 25px;
  }

  @media ${deviceWidth.laptop} {
    gap: 25px;
  }
`;
export const InputContainer = styled.div`
  height: 317px;
  flex-shrink: 0;
  padding: 30px;
  border-radius: 20px;
  background: #fff;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RegisterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 2px;
`;
