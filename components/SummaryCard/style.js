import Image from "next/image";
import styled from "styled-components";
import { deviceWidth } from "../../constant/deviceWidth";


export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 120px;
  flex-shrink: 0;
  border-radius: 20px;
  justify-content: space-between;
  background: ${(props) => props.background};

  @media ${deviceWidth.tablet} {
    width: 221.053px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  width: 124px;
  flex-direction: column;
  flex-shrink: 0;
  align-self: flex-end;
  gap: 5px;
  margin-bottom: 20px;
  margin-left: 25px;
`;

export const RightWrapper = styled.div`
  margin-top: 25px;
  margin-right: 26px;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 14px;
  font-family: Lato;
`;

export const Value = styled.h1`
  color: #000;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 700;
`;

export const Icon = styled(Image)`
  width: 26.4px;
  height: 24px;
  flex-shrink: 0;
`;
