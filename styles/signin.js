import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100wh;
  background-color: red;
`;

export const WrapperLeft = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
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
  width: 385px;
  flex-shrink: 0;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 26px;
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
`