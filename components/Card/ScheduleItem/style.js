import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const WrapperLeft = styled.div`
  width: 5px;
  height: 66px;
  background: ${(props) => props.background};
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h1`
  color: #666;
  font-size: 14px;
  font-family: Lato;
  font-weight: 700;
`;

export const Text = styled.p`
  color: #999;
  font-size: 12px;
  font-family: Lato;
`;
