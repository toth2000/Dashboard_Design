import styled from "styled-components";
import { deviceWidth } from "../constant/deviceWidth";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  background: #f5f5f5;
  flex-direction: column;
  padding: 5px;

  @media ${deviceWidth.laptop} {
    gap: 60px;
    padding: 25px;
    flex-direction: row;
  }
`;
export const WrapperLeft = styled.div`
  flex: 1;
`;
export const WrapperRight = styled.div`
  flex: 4;
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  gap: 20px;

  @media ${deviceWidth.tablet} {
    gap: 40px;
  }
`;

export const SummaryCardContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;

  @media ${deviceWidth.tablet} {
    flex-wrap: wrap;
    gap: 15px;
    flex-direction: row;
    justify-content: center;
  }

  @media ${deviceWidth.laptop} {
    gap: 37px;
    justify-content: flex-start;
  }
`;
export const ActivityContainer = styled.div`
  height: 359px;
  margin: 0 5px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;

  @media ${deviceWidth.tablet} {
    margin: 0 15px;
  }

  @media ${deviceWidth.laptop} {
    margin: 0;
    margin-right: 60px;
    width: auto;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 2.5%;
  flex-direction: column;
  width: 95%;

  @media ${deviceWidth.tablet} {
    gap: 40px;
    flex-direction: row;
  }

  @media ${deviceWidth.laptop} {
    margin: 0;
    margin-right: 60px;
  }
`;
