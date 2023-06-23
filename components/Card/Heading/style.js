import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 30px;
`;

export const WrapperLeft = styled.div``;

export const WrapperRight = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: #858585;
  font-size: 12px;
  font-family: Montserrat;
`;

export const Icon = styled(Image)`
  width: 8px;
  height: 5px;
  flex-shrink: 0;
`;

export const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

export const LegendColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  flex-shrink: 0;
  background: ${(props) => props.background};
`;

export const LegengText = styled.p`
  color: #000;
  font-size: 14px;
  font-family: Lato;
`;

export const ChartContainer = styled.div`
  display: flex;
  height: 280px;
`;
