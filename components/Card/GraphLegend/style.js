import { styled } from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.div`
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  border-radius: 11px;
  background: ${(props) => props.background};
`;

export const LegendItemContainer = styled.div`
  gap: 5px;
`;

export const LegendTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const LegendValue = styled.p`
  margin-left: 20px;
  color: #858585;
  font-size: 12px;
  font-family: Lato;
`;
